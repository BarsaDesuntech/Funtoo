import React, { useEffect, useState } from "react";
import "./TrackOrder.css";
import TrackOrderHeader from "./TrackOrderHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { get_track_log } from "../../services/OrderService";
import { useParams } from "react-router-dom";
import HeaderAll from "../../Layout/HeaderAll";


export default function TrackOrder() {
  const [track, setTrack] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    get_track_log({
      order_id: id
    })
      .then((res) => {
        console.log(res.data);
        setTrack(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])


  for (let i = 0; i < track.length; i++) {
    const dateTimeString = track[i].date;
    const date = new Date(dateTimeString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours % 12}:${minutes < 10 ? '0' : ''}${minutes} ${amOrPm}`;
    track[i].time = formattedTime;
  }

  return (
    <>
      {/* <TrackOrderHeader /> */}
    <HeaderAll 
    all={true}
    title="Track Order"/>
      <div>
        <div style={{ marginTop: "20px" }}></div>
        {track.map((ele, index) => {
          let line = (index + 1)
          return (
            <>
              <div className="main_body_trcak_order">
                <div className="circle_main_div">
                  <div className="circle_div">
                    <FontAwesomeIcon icon={faCheck} className="check_icon" />
                  </div>
                </div>
                <div className="desp_div">{ele.comment}</div>
                <div className="time_div">{ele.time}</div>
              </div>
              {
                track.length == line ? null : (
                  <div className="dashed_line"></div>
                )
              }
            </>
          )
        })}


      </div>
    </>
  )
}