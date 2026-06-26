# pdf2one

Merge multiple PDF files into one — right in your browser. No uploads, no servers, no installation.

在浏览器中合并多个 PDF 文件，无需上传、无需安装、开箱即用。

**Try online:** https://1asingleone.github.io/pdf2one/pdf2one.html

---

## 详细介绍

### 这是什么？

pdf2one 是一个纯前端工具，让你在浏览器中直接合并多个 PDF 文件。所有文件在本地处理，**不会上传到任何服务器**，隐私安全有保障。

### 适用场景

- 扫描多份纸质文件后需要合并为一个 PDF
- 下载了多个 PDF 章节想合并成一本书
- 需要将多份报告、发票、合同汇总为一个 PDF
- 收集了多页签名文件需要装订成一份

### 功能特性

- **拖拽排序** — 文件列表支持拖拽调整顺序
- **完全离线** — PDF 处理库直接内嵌在 HTML 中，无需任何网络连接
- **加密支持** — 支持加载加密的 PDF（忽略加密层）
- **快速合并** — 利用 pdf-lib 高效复制页面，支持成百上千页

### 用法

1. 用 Chrome、Edge 或 Firefox 打开 `pdf2one.html`
2. 拖拽 .pdf 文件到虚线区域，或点击「选择文件」按钮
3. 拖拽文件项调整合并顺序
4. 输入自定义输出文件名（可选）
5. 点击「合并并下载」即可得到合并后的 PDF

### 兼容性

- 浏览器：Chrome 60+、Edge 79+、Firefox 55+、Safari 12+
- 支持加密 PDF（自动忽略加密层）
- 建议单次合并不超过 20 个文件（受浏览器内存限制）

### 技术原理

pdf2one 使用 [pdf-lib](https://pdf-lib.js.org/) 库在浏览器中处理 PDF 文件：

1. 用 `PDFDocument.load()` 加载每个源 PDF
2. 创建新的空白 `PDFDocument`
3. 遍历每个源 PDF，用 `copyPages()` 逐页复制到新文档
4. 输出合并后的 PDF 文件供下载

pdf-lib 库（约 525KB）以 base64 格式内嵌在 HTML 中，打开即可使用，不需要任何外部网络请求。

---

## Usage (English)

1. Open `pdf2one.html` in Chrome/Edge/Firefox
2. Drag .pdf files onto the drop zone (or click to select)
3. Drag file items to reorder
4. Click the merge button to download

### How it works

Uses [pdf-lib](https://pdf-lib.js.org/) to load each PDF and copy pages into a new document. The library is embedded directly in the HTML file (no CDN required).

### Compatibility

- Chrome 60+, Edge 79+, Firefox 55+, Safari 12+
- Encrypted PDFs with `ignoreEncryption` flag

## See also

| 同类工具 | 格式 |
|----------|------|
| [docx2one](https://github.com/1asingleone/docx2one) | Word 文档合并 |
| [pptx2one](https://github.com/1asingleone/pptx2one) | PPT 幻灯片合并 |

## License

MIT
