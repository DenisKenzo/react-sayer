import Posts from "./posts-page";
import Header from "../../../components/header";

const MainPage = () => {
    const textInHeader = 'World\'s most used time waster'
    return <div>
        <Header showHeading text={textInHeader} mainPage/>
        <Posts/>
    </div>

}

export default MainPage