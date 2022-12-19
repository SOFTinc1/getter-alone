import GetterTableData from "../getter-table-data/getter-table-data.component";
import {
  GetterTableContainer,
  TabsContainer,
  TabContainer,
  H1,
  Table,
  TrFixed,
  Tr,
} from "./getter-table.styles";
import "./getter-table.css";

const GetterTable = () => (
  <GetterTableContainer>
    <div id="horizontal-scroll-except-first-column">
      <table>
        <tbody>
          <tr>
            <th>Categories</th> <th>DeFi</th> <th>NFT</th>
            <th>Metaverse</th> <th>Polkadot</th>
            <th>BNB Chain</th>
            <th>Solana</th> <th>Avalanche</th> <th>Portfolio</th>
            <th>Watchlist</th>
          </tr>
        </tbody>
      </table>
    </div>
  </GetterTableContainer>
);

export default GetterTable;
