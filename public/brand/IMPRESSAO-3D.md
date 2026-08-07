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

---

# v2 — Letreiro neon 88 cm (produção)

Arte aprovada: pulso → anel neon com camadas → **TheRetech** sólido.
Placa **880 × 190 mm** em 4 segmentos; badge 130 mm; letras cap 79 mm;
linhas neon 5 mm; fosso 2 mm. POC validou: luz pelo piso verde ✔, fosso ✔,
sanduíche AMS ✔. Espelhamento do eixo Y **corrigido** nestes arquivos.

## Arquivos (`3d-letreiro/`)

- `segmento-{1..4}-piso.stl` (**verde**, difusor sólido) + `segmento-{1..4}-corpo.stl` (**preto**)
  — importar o PAR de cada segmento junto → "single object with multiple parts" → Yes
- `letra-{T,h,e,R,t,c}.stl` (**verde**) — quantidades: T×1 h×2 e×3 R×1 t×1 c×1
- `gabaritos-2mm.stl` — 8 barrinhas da largura exata do fosso, para centralizar na colagem

## Ordem de impressão (4 fornadas de segmento + 1 de letras)

1. Segmento 1 (pulso + anel + camadas) — par piso+corpo, verde+preto
2. Segmentos 2, 3, 4 — idem
3. Letras: todas num prato só, verde, **com as duplicatas** (clonar h×2, e×3)

## Ajustes no slicer (importantes)

- **Letras: infill 100%** (clicar no objeto → Objects → Sparse infill 100%) —
  a POC mostrou o infill de 15% aparecendo na luz como xadrez
- Letras já saem "espelhadas" na mesa DE PROPÓSITO: a face contra a chapa é a
  face visível; desviram ao colar. NÃO espelhar de novo.
- Pisos e corpos: perfil padrão 0.2 mm serve

## Montagem

1. Encaixar os dentes das emendas (cola instantânea nas faces de contato)
2. Colar as letras: gabaritos de 2 mm apoiados no contorno da cavidade →
   letra ao centro → cola no piso → remover gabaritos. Letras que cruzam
   emendas ajudam a travar os segmentos.
3. LED: fita **COB** (branca fria/neutra ou verde) em serpentina atrás da
   placa, cobrindo anel, pulso e a faixa das letras; espaçadores de 15-20 mm
   até a parede; fonte 12/24 V conforme a fita
4. Fixação: parafusos pelos cantos ou fita VHB nos espaçadores

## Pendências

- [ ] Furos de fixação embutidos (pedir se quiser — regeneração rápida)
- [ ] Validar encaixe dos dentes no primeiro par de segmentos impressos
