import { useState } from "react";
import axios from "axios";

function Map() {
  const [data, setData] = useState([
    { name: "s1", city: "c1" },
    { name: "s2", city: "c2" },
    { name: "s3", city: "c3" },
    { name: "s4", city: "c4" },
  ]);

  //  axios.get("url",data).then().catch()

  //  axios.post("url",data).then().catch()
  //  axios.delete("url",data).then().catch()
  //  axios.put("url",data).then().catch()

  // const [state, setState] = useState([
  //   "user1",
  //   "user2",
  //   "user101",
  //   "user102",
  //   "user103",
  //   "user104",
  //   "user105",
  //   "user106",
  //   "user107",
  //   "user108",
  //   "user109",
  //   "user110",
  //   "user111",
  //   "user112",
  //   "user113",
  //   "user114",
  //   "user115",
  //   "user116",
  //   "user117",
  //   "user118",
  //   "user119",
  //   "user120",
  //   "user121",
  //   "user122",
  //   "user123",
  //   "user124",
  //   "user125",
  //   "user126",
  //   "user127",
  //   "user128",
  //   "user129",
  //   "user130",
  //   "user131",
  //   "user132",
  //   "user133",
  //   "user134",
  //   "user135",
  //   "user136",
  //   "user137",
  //   "user138",
  //   "user139",
  //   "user140",
  //   "user141",
  //   "user142",
  //   "user143",
  //   "user144",
  //   "user145",
  //   "user146",
  //   "user147",
  //   "user148",
  //   "user149",
  //   "user150",
  //   "user151",
  //   "user152",
  //   "user153",
  //   "user154",
  //   "user155",
  //   "user156",
  //   "user157",
  //   "user158",
  //   "user159",
  //   "user160",
  //   "user161",
  //   "user162",
  //   "user163",
  //   "user164",
  //   "user165",
  //   "user166",
  //   "user167",
  //   "user168",
  //   "user169",
  //   "user170",
  //   "user171",
  //   "user172",
  //   "user173",
  //   "user174",
  //   "user175",
  //   "user176",
  //   "user177",
  //   "user3",
  //   "user4",
  //   "user5",
  //   "user6",
  //   "user7",
  //   "user8",
  //   "user9",
  //   "user10",
  //   "user11",
  //   "user12",
  //   "user13",
  //   "user14",
  //   "user15",
  //   "user16",
  //   "user17",
  //   "user18",
  //   "user19",
  //   "user20",
  //   "user21",
  //   "user22",
  //   "user23",
  //   "user24",
  //   "user25",
  //   "user26",
  //   "user27",
  //   "user28",
  //   "user29",
  //   "user30",
  //   "user31",
  //   "user32",
  //   "user33",
  //   "user34",
  //   "user35",
  //   "user36",
  //   "user37",
  //   "user38",
  //   "user39",
  //   "user40",
  //   "user41",
  //   "user42",
  //   "user43",
  //   "user44",
  //   "user45",
  //   "user46",
  //   "user47",
  //   "user48",
  //   "user49",
  //   "user50",
  //   "user51",
  //   "user52",
  //   "user53",
  //   "user54",
  //   "user55",
  //   "user56",
  //   "user57",
  //   "user58",
  //   "user59",
  //   "user60",
  //   "user61",
  //   "user62",
  //   "user63",
  //   "user64",
  //   "user65",
  //   "user66",
  //   "user67",
  //   "user68",
  //   "user69",
  //   "user70",
  //   "user71",
  //   "user72",
  //   "user73",
  //   "user74",
  //   "user75",
  //   "user76",
  //   "user77",
  //   "user78",
  //   "user79",
  //   "user80",
  //   "user81",
  //   "user82",
  //   "user83",
  //   "user84",
  //   "user85",
  //   "user86",
  //   "user87",
  //   "user88",
  //   "user89",
  //   "user90",
  //   "user91",
  //   "user92",
  //   "user93",
  //   "user94",
  //   "user95",
  //   "user96",
  //   "user97",
  //   "user98",
  //   "user99",
  //   "user100",
  // ]);
  return (
    <div style={{ padding: "50px" }}>
      <h1>Map concept </h1>

      <dl>
        {data.map((element) => {
          return (
            <>
              <dt>
                <b>User Name</b>
              </dt>
              <dd>{element.name}</dd>

              <dt>
                <b>City</b>
              </dt>
              <dd>{element.city}</dd>
            </>
          );
        })}
      </dl>

      {/* <ol>
        {state.map((element, index) => {
          return <li>{element}</li>; //[<li>{element}</li>,<li>{element}</li>]
        })}
      </ol> */}
    </div>
  );
}

export default Map;
