import { Card } from 'antd';
import React, { useState } from 'react';
import styles from './CustomCard.module.css';
import GenericCard from '../GenericCard/GenericCard';
import { InstagramOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import './CustomClass.css'


const tabListNoTitle = [
  {
    key: 'instagram',
    label: 'Instagram',
  },
  {
    key: 'linkedin',
    label: 'Linkedin',
  },
  {
    key: 'email',
    label: 'Email',
  },
];

const contentListNoTitle: Record<string, React.ReactNode> = {
  instagram: 
    <GenericCard
      user='brwnocp'
      customClass='instagram'
      label='INSTAGRAM'
      icon={<InstagramOutlined/>}
      link='https://www.instagram.com/brwnocp/'
    />,
  linkedin: 
    <GenericCard
        user='Bruno Costa'
        customClass='linkedin'
        label='LINKEDIN'
        icon={<LinkedinOutlined/>}
        link='https://www.instagram.com/brwnocp/'
    />,
  email: 
    <GenericCard
      user='Bruno Porfirio'
      customClass='email'
      label='E-MAIL'
      icon={<MailOutlined/>}
      link='mailto:brunoporfirio022@gmail.com'
    />,
};

const CustomCard: React.FC = () => {
  const [activeTabKey, setActiveTabKey] = useState<string>('instagram');

  const onTab2Change = (key: string) => {
    setActiveTabKey(key);
  };

  return (
    <div className={styles.content}>
      <Card
        className={styles.card}
        style={{ width: '100%' }}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey}
        onTabChange={onTab2Change}
      > 
      <div>
          {contentListNoTitle[activeTabKey]}
      </div>
      </Card>
    </div>
  );
};

export default CustomCard;