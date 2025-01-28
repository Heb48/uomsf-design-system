/* eslint-disable max-len */
class FileUpload {
  constructor(element) {
    this.element = element
    this.input = this.element.querySelector('input.uom-file-upload__input')
    this.label = this.element.querySelector('label.uom-file-upload__label')
    this.multipleUpload = this.input && this.input.hasAttribute('multiple')
    this.replaceFiles = this.element.hasAttribute('data-replace-files')
    this.filesList = null
  }

  init() {
    if (!this.input) return

    if (!this.label) {
      const label = document.createElement('label')
      label.htmlFor = this.input.id
      label.classList.add('uom-file-upload__label', 'uom-button', 'uom-button--dark-outline-solid')
      label.textContent = 'Select file'
      this.element.insertAdjacentElement('beforeend', label)
      this.label = this.element.querySelector('label.uom-file-upload__label')
    }

    this.input.addEventListener('change', this.handleInputChange.bind(this))
  }

  handleInputChange() {
    if (this.input.value === '') return
    this.updateFileList()
  }

  createFileList() {
    const ul = document.createElement('ul')
    ul.classList.add('uom-file-upload__list')

    this.label.insertAdjacentElement('afterend', ul)
    this.filesList = this.element.querySelector('.uom-file-upload__list')
  }

  createFileItem(file) {
    const li = document.createElement('li')
    li.classList.add('uom-file-upload__item')
    const html = `
      <span class="uom-file-upload__item-filename"></span>
      <button type="button" class="uom-icon-button">
        <span class="sr-only">Remove file</span>
        <span class="material-icons uom-material-icons" focusable="false" aria-hidden="true">cancel</span>
      </button>`

    li.insertAdjacentHTML('afterbegin', html)
    li.querySelector('.uom-file-upload__item-filename').textContent = this.constructor.truncateString(file.name, 50)
    return li.outerHTML
  }

  updateFileList() {
    if (!this.filesList) {
      this.createFileList()
    }

    this.filesList.classList.add('active')

    const dataTransfer = new DataTransfer()

    for (let i = 0; i < this.input.files.length; i += 1) {
      const file = this.input.files[i]
      dataTransfer.items.add(file)
    }

    this.currentFiles = dataTransfer
    let fileListHTML = ''

    for (let i = 0; i < this.input.files.length; i += 1) {
      const file = this.input.files[i]
      fileListHTML = this.createFileItem(file) + fileListHTML
    }

    if (this.replaceFiles) {
      this.filesList.innerHTML = fileListHTML
    } else {
      this.filesList.insertAdjacentHTML('beforeend', fileListHTML)
    }

    this.input.files = this.currentFiles.files
    this.removeFile()
  }

  removeFile() {
    this.filesList.addEventListener('click', this.handleFileRemove.bind(this))
  }

  handleFileRemove(event) {
    if (!event.target.closest('.uom-icon-button')) return
    event.preventDefault()
    const item = event.target.closest('.uom-file-upload__item')
    const filename = item.querySelector('.uom-file-upload__item-filename').textContent

    const dataTransfer = new DataTransfer()
    for (let i = 0; i < this.currentFiles.files.length; i += 1) {
      const file = this.currentFiles.files[i]
      if (file.name !== filename) {
        dataTransfer.items.add(file)
      }
    }

    this.currentFiles = dataTransfer
    this.input.files = this.currentFiles.files

    item.remove()

    if (this.filesList.children.length === 0) {
      this.filesList.classList.remove('active')
    }
  }

  static truncateString(str, num) {
    return str.length <= num ? str : `${str.slice(0, num)}...`
  }
}

export default FileUpload
