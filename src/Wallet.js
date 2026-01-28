import { useQuery, useMutation } from '@tanstack/react-query';
// Assume these mocks and imports exist
import { useWallet, fetchBalance, stakeEth, formatEther } from './mocks';

// ---------------------------------------------------------
// PART 1: LOGIC (Custom Hook)
// ---------------------------------------------------------
function useStaking(address) {
  // 1. Setup useQuery to fetch the balance
  // Constraint: Use 'address' as part of the query key
  const balanceQuery = useQuery({
    // TODO: Define queryKey and queryFn
    queryKey: ['address', address],
    queryFn: () => fetchBalance(address),
  });

  // 2. Setup useMutation to handle the staking transaction
  const stakeMutation = useMutation({
    // TODO: Define mutationFn (calls stakeEth)
    mutationFn: stakeEth,
    onMutate: () => {
        toast.loading("Staking...")
    },
    onSuccess: () => {
        toast.dismiss();
        toast.success("Success")
    },
    onError: () => {
        toast.dismiss();
        toast.success("Staking Failed! Something went wrong.")
    }    
  });

    return {
        // 1. Move the ternary check OUTSIDE formatEther to be safe
        balance: balanceQuery.data ? formatEther(balanceQuery.data) : "0",

        // 2. Define what 'isLoading' actually is (check fetch AND mutation status)
        isLoading:  balanceQuery.isLoading || stakeMutation.isPending, 

        // 3. Keep your working stake function
        stake: () => stakeMutation.mutate("1.0")
    };
}

// ---------------------------------------------------------
// PART 2: UI (Component)
// ---------------------------------------------------------
export function StakingDashboard() {
  // 1. Get Wallet State
  const { address, chainId, switchNetwork } = useWallet();
  const GOERLI_ID = 5;
  // 2. Call your Custom Hook
  // Hint: Pass the address from useWallet
  const { balance, isLoading, stake } = useStaking(address);

  // 3. Handle Network Logic
  // Constraint: Target is Goerli (ID: 5)
  const isWrongNetwork = chainId !== GOERLI_ID; // TODO: Replace false with check against chainId
  
  return (
    <div className="p-4 border rounded">
      <h1>Staking Dashboard</h1>

      {/* 4. Display Balance or Loading State */}
      <div className="mb-4">
        <h3>My Stake: { balance } ETH</h3>
      </div>

      {/* 5. Action Section */}
      <div>
        <button 
          // TODO: Attach click handler to call stake()
          // TODO: Disable if isWrongNetwork OR if transaction is pending
          onClick={stake}
          disabled={isWrongNetwork} 
        >
          {/* TODO: Change text if "Staking..." (mutation pending) vs "Stake 1 ETH" */}
          {isLoading ? "Staking..." : "Stake 1 ETH"}
        </button>

        {isWrongNetwork && <button onClick={ () => switchNetwork(GOERLI_ID) }>Wrong Network. Switch?</button>
}
      </div>
    </div>
  );
}