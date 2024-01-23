function CardSkill( props) {
  return (
    <>
        <div className="mt-16 py-4 px-4 border-1 border-2 border-gray-300 w-[auto] mx-4 bg-white rounded-xl md:mx-0 md:w-[400px] ">
                <div className="w-sm ">
                  <div className="mt-4 text-gray-600 text-center">
                    <h4 className="text-xl font-bold">{props.titulo}</h4>
                    <div className="flex justify-between p-4">

                        <div className="text-left ">
                            
                        </div>

                        <div className="text-left px-4">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}