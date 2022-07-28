import { Contract, ethers } from "ethers";
import { MARKET_CONTRACT, NFT_CONTRACT } from "../utils";

export const getMarketContract = async (
  ethereum:
    | ethers.providers.ExternalProvider
    | ethers.providers.JsonRpcFetchFunc
): Promise<Contract | null> => {
  try {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const { chainId } = await provider.getNetwork();
    if (chainId !== 31337 && chainId !== 80001) {
      window.alert("Change your network to Mumbai Testnet or Local HardHat");
      throw new Error("Change your network to Mumbai Testnet or Local HardHat");
    }
    const key = chainId.toString();
    const marketAddress = MARKET_CONTRACT[key].address;
    const marketAbi = MARKET_CONTRACT[key].abi;
    const signer = provider.getSigner();
    const marketContract = new ethers.Contract(
      marketAddress,
      marketAbi,
      signer
    );
    return marketContract;
  } catch (error) {
    return null;
  }
};

export const getNFTContract = async (
  ethereum:
    | ethers.providers.ExternalProvider
    | ethers.providers.JsonRpcFetchFunc
): Promise<Contract | null> => {
  try {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const { chainId } = await provider.getNetwork();
    if (chainId !== 31337 && chainId !== 80001) {
      window.alert("Change your network to Mumbai Testnet or Local HardHat");
      throw new Error("Change your network to Mumbai Testnet or Local HardHat");
    }
    const key = chainId.toString();
    const nftAddress = NFT_CONTRACT[key].address;
    const nftAbi = NFT_CONTRACT[key].abi;
    const signer = provider.getSigner();
    const nftContract = new ethers.Contract(nftAddress, nftAbi, signer);
    return nftContract;
  } catch (error) {
    return null;
  }
};
