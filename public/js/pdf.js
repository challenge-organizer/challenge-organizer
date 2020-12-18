function generatePdf() {
  import jsPDF from 'jspdf'
  import 'jspdf-autotable'
  
  let doc = new jsPDF()
  doc.autoTable({ html: '#table'})
  doc.autoTable({
    head: [['Name', 'Email', 'Country']],
    body: [
      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain'], 
    ], 
  }) 
  
  doc.save("output.pdf") 
} 