import Countdown from 'react-countdown';

const Timer = ({actualDate}) => {
    // Diplayed on time out
    const Completionist = () => <span style={{fontSize: "1.2rem", fontWeight: "700", fontFamily: "Bungee", color: "#dc3545"}}>Vous êtes mort !</span>;

    // HTML to render on condition
    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <span style={{fontSize: "1.5rem", fontWeight: "700", fontFamily: "Bungee"}}>{minutes}:{seconds}</span>;
        }
    };

    return(
        // Render the HTML with style.
        <div style={{position: "absolute", left: "20px", bottom: "20px"}}>
            <Countdown
                date={actualDate}
                renderer={renderer}
            />
        </div>
    );
};

Timer.propTypes = {};

Timer.defaultProps = {};

export default Timer;
