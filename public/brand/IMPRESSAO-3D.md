# Logo The Retech em 3D — guia de impressão (Bambu Lab A1)

Placa de mesa em duas cores, duas impressões: **placa preta** com cavidades
rasas + **peças verdes** (badge e letras) encaixadas. Sem AMS: uma cor por
impressão, encaixe no final.

## Arquivos (nesta pasta)

| Arquivo | Papel | Filamento |
|---|---|---|
| `logo-3d-placa-lisa.svg` | Base de 3 mm que será escavada no slicer | preto |
| `logo-3d-encaixes.svg` | Duas funções: escavação (peça negativa) na placa E as peças de imprimir | verde (na 2ª função) |
| `logo-3d-placa.svg` | Placa já perfurada — método alternativo, **ignorar** no fluxo abaixo | — |

Medidas embutidas nos SVGs (o slicer importa no tamanho certo, não
redimensionar): placa **200 × 43,75 mm**, badge 31,2 mm, letras 18,8 mm de
caixa-alta. Escala 0,3125 mm/unidade. Para outro tamanho, pedir regeneração —
é um parâmetro no script.

## O conceito: rebaixo, nunca furo passante

Recorte a letra "e" numa folha com estilete: o miolo cai — nada o segura.
Furo passante na placa faz o mesmo: os miolos dos três "e" e do "R" viram
pecinhas soltas.

**Solução**: a placa tem 3 mm e a cavidade desce só **1,6 mm** a partir do
topo. Sobra 1,4 mm de chão preto que:

1. mantém os miolos das letras presos à placa;
2. aparece dentro das janelas vazadas do ícone do badge — o visual exato do
   logo original.

As peças verdes têm 1,6 mm de altura e assentam niveladas com a superfície.

## Passo a passo no Bambu Studio (fazer em dupla com o Claude)

### Impressão 1 — placa (filamento preto)

1. `File → Import` → `logo-3d-placa-lisa.svg` → altura de extrusão **3 mm**.
2. `File → Import` → `logo-3d-encaixes.svg` → altura **1,6 mm**.
3. Botão direito no objeto dos encaixes → **Change type → Negative part**
   (vira escavação em vez de peça).
4. Alinhar os encaixes sobre a placa (mesmo X/Y — os dois arquivos usam o
   mesmo sistema de coordenadas, então alinhar os cantos alinha tudo) e
   **rente ao topo** da placa (Z = 3 − 1,6 = 1,4 mm).
5. Fatiar e imprimir em preto.

### Impressão 2 — peças verdes

1. `File → Import` → `logo-3d-encaixes.svg` → altura **1,6 mm** (agora como
   peça normal).
2. **Folga de encaixe** (essencial): peça e cavidade têm exatamente a mesma
   medida, e FDM incha o perímetro. No perfil de impressão:
   `Quality → Precision → X-Y contour compensation` = **−0,10 a −0,15 mm**
   (só nesta impressão!). Se travar, reimprimir com −0,05 a mais; se folgar,
   cola resolve.
3. Imprimir em verde (o tom da marca é `#00FF88` — verde neon).

### Montagem

Encaixar; gota de cola instantânea nas peças pequenas se quiser garantia.

## Dicas para a A1

- Imprimir as letras com a **face visível para baixo** na chapa PEI — a
  textura da chapa vira o acabamento, uniforme com o da placa.
- Primeira camada caprichada importa mais que velocidade: peças de 1,6 mm
  são quase só primeira camada.
- Miolos do "e"/"R" na placa são colunas finas na cavidade — nada a fazer,
  só não usar furo passante.

## Pendências combinadas

- [ ] Sessão conjunta no Bambu Studio (importar, alinhar, fatiar).
- [ ] Furos de parafuso na placa para pendurar — opcional, pedir que o
      Claude adiciona no SVG antes de fatiar.
- [ ] Ajuste fino da folga após o primeiro teste de encaixe.

---
*Gerado em 2026-08-07. Fonte do wordmark: Space Grotesk Bold vetorizada;
ícone convertido de stroke para contorno preenchido. Pipeline em
`build_logo.py` / `build_logo_3d_fit.py` (sessão Claude Code — pedir
regeneração para outros tamanhos/folgas).*
