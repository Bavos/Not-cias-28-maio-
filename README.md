# Projeto Remotion — Resumo das Notícias (45s)

Projeto profissional em **React + TypeScript + Remotion** para gerar um vídeo vertical jornalístico de 45 segundos, sem áudio.

## Requisitos

- Node.js 20+ (LTS recomendado)
- npm 10+

## Estrutura

```bash
src/
  index.ts
  Root.tsx
  compositions/
  components/
  styles/
  data/
public/
.github/workflows/render.yml
```

## Instalação

```bash
npm install
```

## Desenvolvimento (preview no Remotion Studio)

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Render local MP4

```bash
npm run render
```

Arquivo final:

- `out/final-news-video.mp4`

## Render automática no GitHub Actions

O workflow em `.github/workflows/render.yml` faz:

1. Checkout do código
2. Setup do Node.js LTS com cache npm
3. Instalação de dependências
4. Build do bundle Remotion
5. Render do vídeo MP4
6. Upload do arquivo como artifact `final-news-video`

### Como baixar o artifact final

1. Acesse a aba **Actions** do repositório.
2. Abra a execução do workflow **Render News Video**.
3. No final da execução, em **Artifacts**, clique em **final-news-video**.
4. Baixe o ZIP e extraia o arquivo MP4 renderizado.

## Observações técnicas

- Composição `NewsVideo` configurada para **1080x1920**, **30fps**, **1350 frames** (45s).
- Render H.264 em MP4 sem trilha de áudio.
- Estrutura modular para facilitar customização de blocos editoriais.
