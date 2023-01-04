import React, { Component } from "react";
import {
  GetterTableDataContainer,
  Image1,
  Tr,
} from "./getter-table-data.styles";
import "./getter-table.css";
// import Bitcoin from "../../../assets/svg/bitcoin.svg";
// import Graph from "../../../assets/svg/graph.svg";
// import More from "../../../assets/svg/more.svg";

class GetterTableData extends Component {
  constructor() {
    super();

    this.state = {
      coins: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((response) => response.json())
      .then((coins) => this.setState({ coins: coins }));
  }

  render() {
    // const { coins } = this.state;

    return (
      <GetterTableDataContainer>
        <div class="horizontal-scroll-except-first-column">
          <table>
            <tbody>
              <Tr>
                <th className="symbol"># coin</th> <th>1h</th> <th>1h</th><th>4h</th> <th>price</th>
                <th>price</th>
                <th>24h</th> <th>24h volume</th>{" "}
                <th>marketcap</th> <th>fully diluted valuation</th>
                <th>total volume</th> <th>high 24h</th>
                <th>low 24h</th> <th>price change 24h</th>
                <th>price change percentage 24h</th>{" "}
                <th>market cap change percentage 24h</th>{" "}
                <th>circulating supply</th>
                <th>total supply</th> <th>total supply</th> <th>max supply</th>
                <th>ath</th> 
                {/* <th>more</th> */}
              </Tr>
              {this.state.coins.map((coin) => (
                <Tr>
                  <td>
                    <h1 className="symbol1">{coin.market_cap_rank} <Image1 src={coin.image} /> {coin.symbol} <br /> <h2 className="try">{coin.name}</h2></h1>
                  </td>
                  <td>1h</td> <td>1h</td> <td>4h</td> <td>price</td>
                  <td>$ {coin.current_price}</td>
                  <td>$ {coin.high_24h}</td> <td>$ {coin.fully_diluted_valuation}</td>
                  <td>$ {coin.market_cap}</td> <td>$ {coin.fully_diluted_valuation}</td>
                  <td>{coin.total_volume}</td> <td>{coin.high_24h}</td>
                  <td>{coin.low_24h}</td> <td>$ {coin.price_change_24h}</td>
                  <td>% {coin.price_change_percentage_24h}</td>{" "}
                  <td>$ {coin.market_cap_change_24h}</td>
                  {/* <td>% {coin.market_cap_change_percentage_24}</td>{" "} */}
                  <td>{coin.circulating_supply}</td>
                  <td>{coin.total_supply}</td> <td>{coin.max_supply}</td>{" "}
                  <td>$ {coin.ath}</td> 
                  {/* <td>more</td> */}
                </Tr>
              ))}
            </tbody>
          </table>
        </div>
      </GetterTableDataContainer>
    );
  }
}
export default GetterTableData;

{
  /* {this.state.coins.map((coin) => (
          <div class="grid-container">
            <div class="grid">
              <div class="grid-col2 grid-col--fixed-left">
                <div class="grid-item grid-item--header">
                  <p>#</p>
                </div>
                <div class="grid-item move-away">
                  <div className="star-flex">
                    <div className="details">
                      <p className="big">{coin.market_cap_rank}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="grid-col grid-col--fixed-left">
                <div class="grid-item grid-item--header">
                  <p>Coins</p>
                </div>
                <div class="grid-item move-away move-away-par">
                  <div className="coin-flex">
                    <Image1 src={coin.image} />
                    <div className="details">
                      <p className="big">
                        {coin.symbol} <br />
                        {coin.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="grid-col">
                <div class="grid-item grid-item--header">
                  <p>Price</p>
                </div>
                <div class="grid-item move-away">
                  <p>${coin.current_price}</p>
                </div>
              </div>

              <div class="grid-col">
                <div class="grid-item grid-item--header">
                  <p>1h</p>
                </div>
                <div class="grid-item move-away">
                  <p>-0.1%</p>
                </div>
              </div>

              <div class="grid-col">
                <div class="grid-item grid-item--header">
                  <p>4h</p>
                </div>
                <div class="grid-item move-away">
                  <p>-0.1%</p>
                </div>
              </div>

              <div class="grid-col">
                <div class="grid-item grid-item--header">
                  <p>24h</p>
                </div>
                <div class="grid-item move-away">
                  <p>12.4%</p>
                </div>
              </div>

              <div class="grid-col">
                <div class="grid-item grid-item--header">
                  <p>Last 7 Days</p>
                </div>
                <div class="grid-item move-away">
                  <Image2 src={Graph} />
                </div>
              </div>

              <div class="grid-col">
                <div class="grid-item grid-item--header">
                  <p>24h Volume</p>
                </div>
                <div class="grid-item move-away">
                  <p>23.549.71M </p>
                </div>
              </div>

              <div class="grid-col">
                <div class="grid-item grid-item--header">
                  <p>Market Cap</p>
                </div>
                <div class="grid-item move-away">
                  <p>$233.549.71M </p>
                </div>
              </div>

              <div class="grid-col">
                <div class="grid-item grid-item--header">
                  <p>More</p>
                </div>
                <div class="grid-item move-away">
                  <Image3 src={More} />
                </div>
              </div>
            </div>
          </div>
        ))} */
}
