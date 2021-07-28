import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { utils } from "ethers";

const contractName = "HelloWorld";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, tenderly } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  const helloWorld = await deploy(contractName, {
    args: ["world"],
    from: deployer,
    log: true,
    gasPrice: utils.hexlify(utils.parseUnits("2", "gwei")),
  });

  await tenderly.persistArtifacts({
    name: contractName,
    address: helloWorld.address,
  });
};
export default func;
func.tags = [contractName];
