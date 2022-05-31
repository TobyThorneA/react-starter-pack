/* This source code is exported from pxCode, you can get more document from https://www.pxcode.io */
import React from 'react';
import cn from 'classnames';

import styles from './AllCats.module.scss';

export default function AllCats() {
  return (
    <div className={`all-cats ${cn(styles.group, styles.group_layout2)}`}>
      <div className={cn(styles.group, styles.group_layout)}>
        <div className={cn(styles.block2, styles.block2_layout)} />
        <div
          style={{ '--src': `url(${import('assets/a8c625776db329fe59428ca425aa6c5d.png').default})` }}
          className={cn(styles.image, styles.image_layout)}
        />

        <div
          style={{ '--src': `url(${import('assets/7bf733b183c0b60c4301cf8f69be2152.png').default})` }}
          className={cn(styles.cover_block, styles.cover_block_layout)}
        >
          <div
            style={{ '--src': `url(${import('assets/ecc599f7523ce69c441519b577a456c7.png').default})` }}
            className={cn(styles.icon, styles.icon_layout)}
          />
        </div>
      </div>

      {/* <div className={cn(styles.flex3, styles.flex3_layout)}>
        <div className={cn(styles.flex3_item)}>
          <div
            style={{ '--src': `url(${import('assets/f4e0509a4fed467b1d60680fbe1d22e8.png').default})` }}
            className={cn(styles.image3, styles.image3_layout)}
          />
        </div>
        <div className={cn(styles.flex3_spacer)} />
        <div className={cn(styles.flex3_item)}>
          <div
            style={{ '--src': `url(${import('assets/3cc35157290c2cc86971a9de16b50a2a.png').default})` }}
            className={cn(styles.image3, styles.image3_layout)}
          />
        </div>
        <div className={cn(styles.flex3_spacer)} />
        <div className={cn(styles.flex3_item)}>
          <div
            style={{ '--src': `url(${import('assets/135089e534680702fac098ae275d1216.png').default})` }}
            className={cn(styles.image, styles.image_layout1)}
          />
        </div>
        <div className={cn(styles.flex3_spacer)} />
        <div className={cn(styles.flex3_item)}>
          <div
            style={{ '--src': `url(${import('assets/2d3cf3084ef958f06974aaadbec8e0c0.png').default})` }}
            className={cn(styles.image, styles.image_layout2)}
          />
        </div>
        <div className={cn(styles.flex3_spacer1)} />
        <div className={cn(styles.flex3_item)}>
          <div
            style={{ '--src': `url(${import('assets/d05de520b0231e1ce009ce290fcd79a4.png').default})` }}
            className={cn(styles.image, styles.image_layout3)}
          />
        </div>
      </div>

      <div className={cn(styles.block1, styles.block1_layout)} />

      <div className={cn(styles.block, styles.block_layout)}>
        <div className={cn(styles.group, styles.group_layout1)}>
          <div className={cn(styles.flex1, styles.flex1_layout)}>
            <div className={cn(styles.flex1_item)}>
              <div className={cn(styles.block4, styles.block4_layout)}>
                <div className={cn(styles.text_body, styles.text_body_layout)}>{'Все котики'}</div>
              </div>
            </div>
            <div className={cn(styles.flex1_item1)}>
              <div className={cn(styles.block3, styles.block3_layout)}>
                <div className={cn(styles.text_body1, styles.text_body1_layout)}>{'Любимые котики'}</div>
              </div>
            </div>
          </div>
        </div>

        <div className={cn(styles.flex, styles.flex_layout)}>
          <div className={cn(styles.flex_item)}>
            <div
              style={{ '--src': `url(${import('assets/6db5e00807939c3a08eb7af4339ecb2f.png').default})` }}
              className={cn(styles.image, styles.image_layout4)}
            />
          </div>
          <div className={cn(styles.flex_spacer)} />
          <div className={cn(styles.flex_spacer1)} />
          <div className={cn(styles.flex_spacer2)} />
          <div className={cn(styles.flex_item)}>
            <div
              style={{ '--src': `url(${import('assets/f992af2d09b24577beb4fdabd3eab75a.png').default})` }}
              className={cn(styles.image, styles.image_layout5)}
            />
          </div>
          <div className={cn(styles.flex_spacer3)} />
          <div className={cn(styles.flex_item1)}>
            <div
              style={{ '--src': `url(${import('assets/607c38d1caa10d0b7beaf3c0a5c13b5d.png').default})` }}
              className={cn(styles.image1, styles.image1_layout)}
            />
          </div>
          <div className={cn(styles.flex_spacer4)} />
          <div className={cn(styles.flex_item2)}>
            <div
              style={{ '--src': `url(${import('assets/05c39d7a86b385703f3e7ec28211ba17.png').default})` }}
              className={cn(styles.image, styles.image_layout6)}
            />
          </div>
        </div>

        <div className={cn(styles.flex2, styles.flex2_layout)}>
          <div className={cn(styles.flex2_item)}>
            <div
              style={{ '--src': `url(${import('assets/a5f80fddfab19e5f474201293d692c36.png').default})` }}
              className={cn(styles.image, styles.image_layout7)}
            />
          </div>
          <div className={cn(styles.flex2_spacer)} />
          <div className={cn(styles.flex2_item)}>
            <div
              style={{ '--src': `url(${import('assets/08c6536b5112a22b1610ce18bac205b5.png').default})` }}
              className={cn(styles.image, styles.image_layout8)}
            />
          </div>
          <div className={cn(styles.flex2_spacer)} />
          <div className={cn(styles.flex2_item)}>
            <div
              style={{ '--src': `url(${import('assets/f09333267e11af17899f13c8ce488619.png').default})` }}
              className={cn(styles.image, styles.image_layout9)}
            />
          </div>
          <div className={cn(styles.flex2_spacer)} />
          <div className={cn(styles.flex2_item1)}>
            <div
              style={{ '--src': `url(${import('assets/dcb4aa8f3e5170b715d37b26c71a2893.png').default})` }}
              className={cn(styles.image2, styles.image2_layout)}
            />
          </div>
          <div className={cn(styles.flex2_spacer)} />
          <div className={cn(styles.flex2_item)}>
            <div
              style={{ '--src': `url(${import('assets/3b5eb285cc710d55077b794d4d30a304.png').default})` }}
              className={cn(styles.image, styles.image_layout10)}
            />
          </div>
        </div>

        <div className={cn(styles.block_spacer)} />
        <div className={cn(styles.text_body11, styles.text_body11_layout)}>{'... загружаем еще котиков ...'}</div>
      </div> */}
    </div>
  );
}

AllCats.inStorybook = true;
