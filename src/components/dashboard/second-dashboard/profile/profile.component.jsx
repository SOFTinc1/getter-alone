import {
  ProfileContainer,
  First,
  Other,
  Flex,
  Job,
  Icon,
  Flex2Container,
  Flex2,
  Asset,
  Token,
  Nft,
  Flex3,
  Asset2,
  Token2,
  Nft2,
} from "./profilesecond-dashboard.styles";

export default function Profile() {
  return (
    <ProfileContainer>
      <First>daniel</First>
      <Other>joseph, olawale</Other>
      <Flex>
        <Job>ui/ux designer</Job>
        <Icon>&#10003;</Icon>
      </Flex>
      <Flex2Container>
        <Flex2>
          <Asset>all</Asset>
          <Token>token</Token>
          <Nft>nft</Nft>
        </Flex2>
        <Flex3>
          <Asset2>30</Asset2>
          <Token2>24</Token2>
          <Nft2>6</Nft2>
        </Flex3>
      </Flex2Container>
    </ProfileContainer>
  );
}
