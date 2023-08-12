import styled from '@emotion/styled';
import Button from '@mui/material/Button'
import ConnectedWalletLabel from './ConnectWalletLabel';
import SafeInfo from './SafeInfo'
import { useAccountAbstraction } from '../../context/accountAbstractionContext';
import Box from '@mui/material/Box';

const AuthKitDemo = () => {
  const { loginWeb3Auth, isAuthenticated, safeSelected, chainId } = useAccountAbstraction();

  return (
    <>
      <h1>Easy Onboarding</h1>

      <h1>
        Generate or authenticate a blockchain account using an email address, social media account,
        or traditional crypto wallets like Metamask.
      </h1>

      {/* Auth Demo */}
      <h1>
        Interactive demo
      </h1>

      {isAuthenticated ? (
        <Box display="flex" gap={3}>
          {/* safe Account */}
          <ConnectedContainer>
            <h1>Safe Account</h1>

            <h1>
              Your Safe account (Smart Contract) holds and protects your assets.
            </h1>

            {/* Safe Info */}
            {safeSelected && <SafeInfo safeAddress={safeSelected} chainId={chainId} />}
          </ConnectedContainer>

          {/* owner ID */}
          <ConnectedContainer>
            <h1>Owner ID</h1>

            <h1>
              Your Owner account signs transactions to unlock your assets.
            </h1>

            {/* Owner details */}
            <ConnectedWalletLabel />
          </ConnectedContainer>
        </Box>
      ) : (
        <ConnectContainer display="flex" flexDirection="column" alignItems="center" gap={2}>
          <h1>
            Create a safe using the Auth Kit
          </h1>

          <Button variant="contained" onClick={loginWeb3Auth}>
            Connect
          </Button>
        </ConnectContainer>
      )}

      <br />

      <h1>
        How to use it
      </h1>

    </>
  )
}

export default AuthKitDemo


const ConnectContainer = styled(Box)<{
  theme?: any
}>(
  ({ theme }) => `
  border-radius: 10px;
  border: 1px solid white;
  padding: 50px;
`
)

const ConnectedContainer = styled(Box)<{
  theme? : any
}>(
  ({ theme }) => `
  border-radius: 10px;
  border: 1px solid white;
  padding: 40px 32px;
`
)