<!-- books.xsl -->

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <!-- Match the root element of the XML document -->
  <xsl:template match="/">

    <!-- Start HTML document -->
    <html>
      <head>
        <title>Book List</title>
      </head>
      <body>

        <!-- Apply a template to process each book element -->
        <xsl:apply-templates select="books/book" />

      </body>
    </html>

  </xsl:template>

  <!-- Template to process each book element -->
  <xsl:template match="book">

    <!-- Create an ordered list -->
    <ol>

      <!-- Create list items for each book -->
      <li>

        <!-- Display the title, author, and publication year -->
        <p><strong>Title:</strong> <xsl:value-of select="title" /></p>
        <p><strong>Author:</strong> <xsl:value-of select="author" /></p>
        <p><strong>Year:</strong> <xsl:value-of select="publicationYear" /></p>

      </li>

    </ol>

  </xsl:template>

</xsl:stylesheet>
