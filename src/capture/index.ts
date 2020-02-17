import html2canvas from 'html2canvas'
import React from 'react'

export interface SnapOptions {
  file?: string
}

const snap = async (el: React.RefObject<HTMLElement>, options?: SnapOptions) => {
  if (!el || !el.current) {
    throw new Error('Element is undefined.')
  }

  const canvas = await html2canvas(el.current, { useCORS: true })
  const data = canvas.toDataURL()

  if (options && options.file) {
    const tag = document.createElement('a')
    tag.setAttribute('href', data)
    tag.setAttribute('download', options.file)

    tag.click()

    return true
  } else {
    return data
  }
}

export const useCapture = () => ({ snap })
