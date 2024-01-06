import React from 'react'
import milify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

import { useGetCryptosQuery } from '../services/cryptoApi'
import { Cryptocurrencies } from '../components'
import Loader  from './Loader'

const { Title } = Typography

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats

  if (isFetching) return <Loader />;
  
  const CrypVal = milify(globalStats.total)
  const Exc = milify(globalStats.totalExchanges)
  const MC = milify(globalStats.totalMarketCap)
  const Vol = milify(globalStats.total24hVolume)
  const marks = milify(globalStats.totalMarkets)
  

  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row>
        <Col span={12}> <Statistic title="Total Cryptocurrencies" value={CrypVal} /></Col>
        <Col span={12}> <Statistic title="Total Exchanges" value={Exc} /></Col>
        <Col span={12}> <Statistic title="Total Market Cap" value={MC} /></Col>
        <Col span={12}> <Statistic title="Total 24h Volume" value={Vol} /></Col>
        <Col span={12}> <Statistic title="Total Markets" value={marks} /></Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">Top Cryptocurrencies in the world</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified={true}/>

      {/* <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
      </div> */}
      {/* <News simplified/> */}
    </>
  )
}

export default Homepage