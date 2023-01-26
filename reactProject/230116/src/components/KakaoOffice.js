import { useEffect, useRef } from "react";

function KakaoOffice() {
  const { kakao } = window;
  const mapContainer = useRef();
  const mapOption = {
    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };
  const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667); // 마커가 표시될 위치입니다

  useEffect(() => {
    const map = new kakao.maps.Map(mapContainer.current, mapOption); // 지도를 생성합니다
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    }); // 마커를 생성합니다
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  }, []);

  return (
    <div className="kakaoBox">
      <div id="map" ref={mapContainer}></div>
    </div>
  );
}

export default KakaoOffice;
