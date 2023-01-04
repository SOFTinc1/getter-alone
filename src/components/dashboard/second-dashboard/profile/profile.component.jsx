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
        <Flex2>
          <Asset>30</Asset>
          <Token>24</Token>
          <Nft>6</Nft>
        </Flex2>
      </Flex2Container>
    </ProfileContainer>
  );
}
