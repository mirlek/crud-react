import {useState} from "react";
import AddButton from "./components/AddButton";
import PageLayout from "./components/PageLayout";
import ToDoList from "./components/ToDoList";
import "./style/App.css";

const App = () => {
    const [showModal, setShowModal] = useState(false)
    const [refresh, setRefresh] = useState(false)
    return (
        <div className="App">
            <PageLayout>
                <AddButton onClick={() => setShowModal(true)}/>
                <ToDoList
                    showModal={showModal}
                    setShowModal={setShowModal}
                    refresh={refresh}
                    setRefresh={setRefresh}
                />
            </PageLayout>
        </div>
    );
}

export default App
