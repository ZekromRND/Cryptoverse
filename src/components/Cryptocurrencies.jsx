import React from 'react'
import { useState, useEffect } from 'react'
import milify from 'millify'
import { Card, Row, Col, Input } from 'antd'
import { Link } from 'react-router-dom'
import Loader  from './Loader'
import { useGetCryptosQuery } from '../services/cryptoApi'


const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100
  const {data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {

    const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm))

    setCryptos(filteredData)
  }, [cryptosList,searchTerm] )

  if (isFetching) return <Loader />;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      )}

{/*       <Row gutter={[32,32]} className="crypto-card-contianer" >
          {cryptos.map((currency) => (
            <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.rank}>
              <Link to={`/crypto/${currency.uuid}`}>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={<img className='crypto-image' alt="" src={currency.iconUrl}/>}
                  hoverable
                >
                  <p>Price: {milify(currency.price)} </p>
                  <p>Market Cap:{milify(currency.marketCap)}</p>
                  <p>Change:{milify(currency.change)}</p>
                </Card>
              </Link>
            </Col>
          ))}
      </Row> */}
    </>
  )
}

export default Cryptocurrencies
