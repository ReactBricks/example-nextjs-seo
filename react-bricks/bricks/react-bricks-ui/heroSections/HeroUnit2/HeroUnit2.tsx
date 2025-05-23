import classNames from 'classnames'
import * as React from 'react'
import { Repeater, RichText, types } from 'react-bricks/rsc'
import {
  backgroundWithImageBgSideGroup,
  highlightTextEditProps,
  LayoutProps,
  paddingBordersSideGroup,
  sectionDefaults,
  textGradientEditProps,
} from '../../LayoutSideProps'
import blockNames from '../../blockNames'
import {
  bgColors,
  buttonColors,
  gradients,
  highlightTextColors,
  textColors,
} from '../../colors'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import { ButtonProps } from '../../shared/bricks/Button'

export interface HeroUnitProps extends LayoutProps {
  textGradient: keyof typeof gradients
  highlightTextColor: { color: string; className: string }
  title: types.TextValue
  text: types.TextValue
  buttons: types.RepeaterItems
  badge: types.RepeaterItems
}

const HeroUnit2: types.Brick<HeroUnitProps> = ({
  backgroundColor,
  backgroundImage,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  textGradient,
  highlightTextColor,
  title,
  text,
  buttons,
  badge,
}: HeroUnitProps) => {
  const titleColor = textColors.GRAY_800
  const textColor = textColors.GRAY_700
  const titleStyle =
    textGradient !== gradients.NONE.value
      ? { WebkitTextFillColor: 'transparent' }
      : {}

  return (
    <Section
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container paddingTop={paddingTop} paddingBottom={paddingBottom}>
        <div className="flex flex-col lg:flex-row items-start space-y-2 lg:space-x-14 lg:space-y-0">
          <div className="flex-1">
            <div className="lg:flex">
              <Repeater
                propName="badge"
                items={badge}
                itemProps={{ textAlign: 'left' }}
                renderWrapper={(items) => <div className="mb-4">{items}</div>}
              />
            </div>

            <div className={titleColor} style={titleStyle}>
              <RichText
                propName="title"
                value={title}
                renderBlock={(props) => (
                  <h1
                    className={classNames(
                      'text-[28px] leading-8 sm:text-[40px] sm:leading-tight lg:text-[44px] lg:leading-snug text-center lg:text-left font-extrabold mb-4 bg-clip-text bg-linear-to-r   ',
                      titleColor,
                      gradients[textGradient]?.className
                    )}
                    {...props.attributes}
                  >
                    {props.children}
                  </h1>
                )}
                allowedFeatures={[types.RichTextFeatures.Highlight]}
                placeholder="Type a title..."
                renderHighlight={({ children }) => (
                  <span className={highlightTextColor.className}>
                    {children}
                  </span>
                )}
              />
            </div>
          </div>
          <div className="flex-1">
            <RichText
              propName="text"
              value={text}
              renderBlock={(props) => (
                <p
                  className={classNames(
                    'text-center lg:text-left text-base leading-6 sm:text-xl sm:leading-8',
                    textColor
                  )}
                  {...props.attributes}
                >
                  {props.children}
                </p>
              )}
              placeholder="Type a text..."
              allowedFeatures={[types.RichTextFeatures.Bold]}
            />
            <Repeater
              propName="buttons"
              items={buttons}
              renderWrapper={(items) => (
                <div className="flex flex-row space-x-5 items-center justify-center lg:justify-start mt-6">
                  {items}
                </div>
              )}
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}

HeroUnit2.schema = {
  name: blockNames.HeroUnit2,
  label: 'Horizontal Hero',
  category: 'hero sections',
  tags: ['hero unit', 'horizontal hero', 'title'],
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Hero%20Unit/HeroUnit.tsx',
  previewImageUrl: `/bricks-preview-images/${blockNames.HeroUnit2}.png`,
  getDefaultProps: () => ({
    ...sectionDefaults,
    paddingTop: '20',
    paddingBottom: '16',
    textGradient: gradients.NONE.value,
    highlightTextColor: highlightTextColors.PINK.value,
    title: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'We develop ',
          },
          {
            text: 'beautiful',
            highlight: true,
          },
          {
            text: ' web applications',
          },
        ],
      },
    ],
    text: "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations.",
    buttons: [
      {
        type: 'link',
        text: 'Get Started now',
        href: '',
        isTargetBlank: false,
        buttonType: 'submit',
        buttonColor: buttonColors.SKY.value,
        variant: 'solid',
        padding: 'normal',
        simpleAnchorLink: false,
      },
      {
        type: 'link',
        text: 'Watch demo',
        href: '',
        isTargetBlank: false,
        buttonType: 'submit',
        buttonColor: buttonColors.SKY.value,
        variant: 'outline',
        padding: 'normal',
        simpleAnchorLink: false,
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'badge',
      itemType: blockNames.Badge,
      itemLabel: 'Badge',
      min: 0,
      max: 1,
    },
    {
      name: 'buttons',
      itemType: blockNames.Button,
      itemLabel: 'Button',
      min: 0,
      max: 2,
    },
  ],
  sideEditProps: [
    {
      groupName: 'Title',
      defaultOpen: true,
      props: [textGradientEditProps, highlightTextEditProps],
    },
    backgroundWithImageBgSideGroup,
    paddingBordersSideGroup,
  ],
  stories: [
    {
      id: 'horizontal-hero-dark',
      name: 'Horizontal Hero Dark',
      showAsBrick: true,
      previewImageUrl: `/bricks-preview-images/horizontal-hero-dark.png`,
      props: {
        ...sectionDefaults,
        paddingTop: '20',
        paddingBottom: '16',
        backgroundColor: bgColors.DARK_GRAY.value,
        textGradient: gradients.NONE.value,
        highlightTextColor: highlightTextColors.LIME.value,
        title: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Great ',
              },
              {
                text: 'DX',
                highlight: true,
              },
              {
                text: ' for Developers, great ',
              },
              {
                text: 'UX',
                highlight: true,
              },
              {
                text: ' for Content editors.',
              },
            ],
          },
        ],
        text: "Forget grey fields, welcome visual editing. Forget going back and forth between the CMS and your editor: it's just React. Enterprise-ready.",
        buttons: [
          {
            type: 'link',
            text: 'Tutorial',
            href: 'https://reactbricks.com/learn',
            isTargetBlank: true,
            buttonType: 'submit',
            buttonColor: buttonColors.SKY.value,
            variant: 'solid',
            padding: 'normal',
            simpleAnchorLink: false,
          },
          {
            type: 'link',
            text: 'View the Docs',
            href: 'https://docs.reactbricks.com/',
            isTargetBlank: true,
            buttonType: 'submit',
            buttonColor: buttonColors.SKY.value,
            variant: 'outline',
            padding: 'normal',
            simpleAnchorLink: false,
          },
        ],
      },
    },
  ],
}

export default HeroUnit2
