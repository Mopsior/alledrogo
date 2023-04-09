import { Html, Head, Main, NextScript } from 'next/document'
// Importujemy komponenty z NextJS

export default function Document() {
  return (
    <Html lang="pl"> {/* Ustawiamy język strony */}
      <Head /> {/* Pozwalamy aby ustawić Head w innych plikach */}
      <body>
        <Main /> {/* Ustawiamy zawartości stron do bycia w <body> */}
        <NextScript /> {/* Dodajemy rzeczy wymagane od NextJS */}
      </body>
    </Html>
  )
}