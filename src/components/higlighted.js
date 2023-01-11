import React from 'react'
import pageStyles from "../pages/page.module.css";
const Highlighted = (props) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#520F9D" fillOpacity="1" d="M0,128L34.3,160C68.6,192,137,256,206,256C274.3,256,343,192,411,160C480,128,549,128,617,117.3C685.7,107,754,85,823,85.3C891.4,85,960,107,1029,133.3C1097.1,160,1166,192,1234,176C1302.9,160,1371,96,1406,64L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
            <h2 className={pageStyles.highlighted}>{props.highlighted}</h2>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#270c2b" fill-opacity="1" d="M0,96L6.2,117.3C12.3,139,25,181,37,213.3C49.2,245,62,267,74,250.7C86.2,235,98,181,111,170.7C123.1,160,135,192,148,218.7C160,245,172,267,185,245.3C196.9,224,209,160,222,122.7C233.8,85,246,75,258,69.3C270.8,64,283,64,295,53.3C307.7,43,320,21,332,58.7C344.6,96,357,192,369,218.7C381.5,245,394,203,406,186.7C418.5,171,431,181,443,154.7C455.4,128,468,64,480,53.3C492.3,43,505,85,517,106.7C529.2,128,542,128,554,138.7C566.2,149,578,171,591,202.7C603.1,235,615,277,628,266.7C640,256,652,192,665,165.3C676.9,139,689,149,702,144C713.8,139,726,117,738,133.3C750.8,149,763,203,775,229.3C787.7,256,800,256,812,245.3C824.6,235,837,213,849,218.7C861.5,224,874,256,886,266.7C898.5,277,911,267,923,256C935.4,245,948,235,960,218.7C972.3,203,985,181,997,149.3C1009.2,117,1022,75,1034,80C1046.2,85,1058,139,1071,181.3C1083.1,224,1095,256,1108,240C1120,224,1132,160,1145,122.7C1156.9,85,1169,75,1182,80C1193.8,85,1206,107,1218,96C1230.8,85,1243,43,1255,58.7C1267.7,75,1280,149,1292,149.3C1304.6,149,1317,75,1329,69.3C1341.5,64,1354,128,1366,154.7C1378.5,181,1391,171,1403,186.7C1415.4,203,1428,245,1434,266.7L1440,288L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"></path>
        </svg> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#520F9D" fill-opacity="1" d="M0,128L34.3,160C68.6,192,137,256,206,256C274.3,256,343,192,411,160C480,128,549,128,617,117.3C685.7,107,754,85,823,85.3C891.4,85,960,107,1029,133.3C1097.1,160,1166,192,1234,176C1302.9,160,1371,96,1406,64L1440,32L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#520F9D" fillOpacity="1" d="M0,128L34.3,128C68.6,128,137,128,206,112C274.3,96,343,64,411,69.3C480,75,549,117,617,144C685.7,171,754,181,823,208C891.4,235,960,277,1029,256C1097.1,235,1166,149,1234,112C1302.9,75,1371,85,1406,90.7L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
        </>
    )
}
export default Highlighted;