import React from 'react'
import { useTranslation } from 'react-i18next'
// import { client } from '@/customer/utils/grpcClient'

const Home: React.FC = () => {
  const { t } = useTranslation(['common'])

  // console.log(client)
  return (
    <div>
      <h2>{t('welcome.title')}</h2>
      <h3>{t('welcome.intro')}</h3>
    </div>
  )
}

export default Home
