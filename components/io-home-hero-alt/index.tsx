import * as React from 'react'
import Image from "next/legacy/image"
import type { Products } from '@hashicorp/platform-product-meta'
import type { IntroProps } from '@hashicorp/react-intro/types'
import Intro from '@hashicorp/react-intro'
import s from './style.module.css'

interface IoHomeHeroAltProps {
  brand: Products
  heading: IntroProps['heading']
  description: IntroProps['description']
  ctas: IntroProps['actions']['ctas']
}

export default function IoHomeHeroAlt({
  brand,
  heading,
  description,
  ctas,
}: IoHomeHeroAltProps) {
  return (
    <header className={s.hero}>
      <div className={s.patterns}>
        <div className={s.patternsStart}>
          <Image
            src={require('./pattern-start.svg')}
            width={418}
            height={543}
            layout="fill"
            objectFit="cover"
            alt=""
            priority
          />
        </div>
        <div className={s.patternsEnd}>
          <Image
            src={require('./pattern-end.svg')}
            width={418}
            height={543}
            layout="fill"
            objectFit="cover"
            alt=""
            priority
          />
        </div>
      </div>
      <div className={s.container}>
        <div className={s.inner}>
          <Intro
            textAlignment="center"
            heading={heading}
            headingSize={1}
            description={description}
            actions={{
              layout: 'stacked',
              theme: brand,
              ctas: ctas.map(
                (cta: { title: string; href: string }, index: number) => {
                  return {
                    ...cta,
                    type: index === 0 ? 'button' : 'standalone-link',
                  }
                }
              ) as IntroProps['actions']['ctas'],
            }}
          />
        </div>
      </div>
    </header>
  )
}
