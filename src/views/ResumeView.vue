<template>
  <div class="resume">
    <h1>This is the page for my resume</h1>
    <button @click="downloadPDF">Download PDF</button>
  </div>
</template>

<script>
export default {
  methods: {
    downloadPDF() {
      const _filename = 'SeanGlavinResume2023.pdf'
      const pdfUrl = '@/assets/pdfs/resume/' + _filename

      // Create a temporary anchor element
      const link = document.createElement('a')

      // Set the download attribute with the desired file name
      link.download = 'downloaded-file-' + _filename

      // Set the href attribute with the URL of the PDF file
      link.href = pdfUrl

      // Append the anchor element to the document
      document.body.appendChild(link)

      // Trigger a click event on the anchor element to start the download
      link.click()

      // Remove the anchor element from the document
      document.body.removeChild(link)
    }
  }
}
</script>
