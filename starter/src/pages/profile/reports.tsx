import Header from "@/components/Header"
import ReportCard from "@/components/ReportCard"
import { ReportsTypes } from "@/types/types";
import { GetServerSideProps, NextPage } from "next"
import { useState } from "react";

interface ReportCardTypes {
    reportData: ReportsTypes[];
}

const Reports: NextPage<ReportCardTypes> = ({ reportData }) => {
    const [toggleStatus, setToggleStatus] = useState(false);

    const handleStatusToggle = () => {
        setToggleStatus(!toggleStatus);
    }

    return (
        <div className="container reports-container">
            <Header
                image={"/images/viber_image_2023-10-22_18-08-15-736 2.svg"}
                leftIcon="fas fa-chevron-left"
                rightIcon="fas fa-bell"
            />
            <h2 className="text-center mb-4">Мои Пријави</h2>

            <div className="row justify-content-between align-items-center text-center mb-4">
                <div className="col-6 d-flex align-items-center">
                    <i className="fas fa-sliders-h mr-2"></i>
                    <p className="reset-margins">Филтрирај</p>
                </div>
                <div className="col-6 ml-auto">
                    48 Пријави
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-12 status-header">
                    <p onClick={handleStatusToggle}>Статус <i className="fas fa-arrow-down"></i></p>
                </div>
            </div>
            {/* TODO: Map the array of the reports. */}
            {reportData.map(record => {
                return (
                    <ReportCard key={record.id} {...record} />
                )
            })}
        </div>
    )
}

export default Reports

export const getServerSideProps: GetServerSideProps = async () => {

    const reportsRes = await fetch("https://icbolxm5sf.sharedwithexpose.com/api/reports");
    const reportData: ReportsTypes[] = await reportsRes.json();

    console.log(reportData);

    return {
        props: {
            reportData,
        }
    }
}