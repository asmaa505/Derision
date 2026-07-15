import Stats from "../stats"
import Countdown from "../countdown"
import History from "../history"

export default function Dashboard(props) {

    return(

        <section id="dashboard">
            <Stats {...props} />
            <Countdown {...props} />
            <History {...props} />
            
        </section>

    )

}