# pdf2one

Merge multiple PDF files into one — right in your browser. No uploads, no servers, no installation.

合并多个 PDF 文件为一个文件 — 纯浏览器端完成，不上传、不安装。

**Try online:** https://1asingleone.github.io/pdf2one/pdf2one.html

---

## Usage

1. Open `pdf2one.html` in Chrome/Edge/Firefox
2. Drag .pdf files onto the drop zone (or click to select)
3. Drag file items to reorder
4. Click the merge button to download

## How it works

Uses [pdf-lib](https://pdf-lib.js.org/) to load each PDF and copy pages into a new document.

## Compatibility

- Chrome 60+, Edge 79+, Firefox 55+, Safari 12+
- Encrypted PDFs with `ignoreEncryption` flag

## See also

| 同类工具 | 格式 |
|----------|------|
| [docx2one](https://github.com/1asingleone/docx2one) | Word 文档合并 |
| [pptx2one](https://github.com/1asingleone/pptx2one) | PPT 幻灯片合并 |

## License

MIT
