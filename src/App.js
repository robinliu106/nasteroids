import AsteroidList from "./AsteroidList";
import DateSelector from "./DateSelector";
const App = () => {
    return (
        <div className="container">
            <div className="row">
                <DateSelector />
            </div>
            <div className="row">
                <div className="col">
                    <AsteroidList />
                </div>
            </div>
        </div>
    );
};

export default App;
