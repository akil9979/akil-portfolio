/**
 * Utility to download or view the resume reliably across:
 * 1. Production deployments (Vercel / Netlify / custom domains)
 * 2. Local dev server (Vite localhost)
 * 3. Direct local file mode (file:/// protocol when double-clicking dist/index.html)
 */

export const getResumeUrl = (): string => {
  const base = (import.meta as unknown as { env?: { BASE_URL?: string } }).env?.BASE_URL || './';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}resume.pdf`;
};

export const handleResumeDownload = async (e?: React.MouseEvent) => {
  const url = getResumeUrl();

  // On HTTP/HTTPS (localhost or deployed web servers), fetch as a blob for direct, guaranteed download
  if (window.location.protocol.startsWith('http')) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const tempLink = document.createElement('a');
        tempLink.href = blobUrl;
        tempLink.download = 'Akil_Rizwani_Resume.pdf';
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
        setTimeout(() => window.URL.revokeObjectURL(blobUrl), 10000);
        if (e) {
          e.preventDefault();
        }
        return;
      }
    } catch (err) {
      console.warn('Direct blob download failed, falling back to browser viewer:', err);
    }
  }

  // On file:/// protocol (double-clicked local HTML file) or if blob download is restricted,
  // open the PDF in a new tab so Chrome's native PDF viewer displays it immediately,
  // completely avoiding Chrome's "File wasn't available on site" file:/// download restriction.
  if (window.location.protocol === 'file:') {
    window.open(url, '_blank');
    if (e) {
      e.preventDefault();
    }
  }
};
