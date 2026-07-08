'use client';

const MapPage = () => {
  const address = 'B405, Celebrity Square apartment, Sarjapura Attibele Road, Bangalore -562017';
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  const handleRedirect = () => {
    if (typeof window !== 'undefined') {
      window.open(googleMapsUrl, '_blank');
    }
  };

  return (
    <div  onClick={handleRedirect} style={{background:"url(/help/map1.png)",backgroundRepeat:"n0-repeat",backgroundPosition:"center",backgroundSize:"cover"}} className="flex cursor-pointer w-full h-full items-center justify-center  p-4">
      <div className=" rounded-lg  w-full container mx-auto p-4 space-y-4">
        <div className="relative h-64  rounded-lg flex items-center justify-center">
         
          <div >
            <button
              onClick={handleRedirect}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
            >
              Open in Google Maps
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
