import React, { type ReactNode } from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import styles from './styles.module.css';

export default function Footer(): ReactNode {
  const { footer } = useThemeConfig() as any;
  if (!footer) return null;

  const { links } = footer;
  const allLinks = (links || []).flatMap((section: any) =>
    (section.items || []).map((item: any) => item)
  );

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <span className={styles.brand}>{'>_'}</span>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} 不如怀念 · Built with Docusaurus
          </span>
        </div>
        <div className={styles.links}>
          {allLinks.map((item: any, i: number) => (
            <React.Fragment key={i}>
              {i > 0 && <span className={styles.sep}>·</span>}
              <a
                href={item.href}
                className={styles.link}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {item.label}
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
}
