import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import LogoutIcon from '@mui/icons-material/LogoutRounded'

import AddressLabel from './AddressLabel'
import { useAccountAbstraction } from '../../context/accountAbstractionContext'


// TODO: rename this to connected owner?
function ConnectedWalletLabel() {
  const { isAuthenticated, ownerAddress, logoutWeb3Auth } = useAccountAbstraction()

  if (!isAuthenticated) {
    // TODO: ADD NO CONNECTED WALLET LABEL
    return null
  }

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack direction="row" alignItems="center" spacing={1.5}>
        <h1>Auth Logo</h1>

        <Typography variant="body2">
          {ownerAddress && <AddressLabel address={ownerAddress} showBlockExplorerLink />}
        </Typography>
      </Stack>

      {/* logout button */}
      <Tooltip title="Logout">
        <LogoutIconButton onClick={logoutWeb3Auth}>
          <LogoutIcon fontSize="small" />
        </LogoutIconButton>
      </Tooltip>
    </Stack>
  )
}

export default ConnectedWalletLabel

const StyledImg = styled('img')`
  border-radius: 50%;
`

const LogoutIconButton = styled(IconButton)<{
  theme?: any
}>(
  ({ theme }) => `
  border: 1px solid green;
`
)