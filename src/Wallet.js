export function WalletFeed() {

}

class ErrorBoundary extends React.Component {
    constructor() {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        console.error(error);
    }

    render() {
        if (this.state.hasError) 
            return this.props.fallback;
        return this.props.children;
    }
}

function Dashboard() {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
            <ErrorBoundary fallback={<div>Feed Unavailable</div>}>
                <WalletFeed />
            </ErrorBoundary>
        </div>
        <Sidebar />
    </div>
  )
}
