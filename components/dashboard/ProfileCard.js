export default function ProfileCard({
    userThumb,
    userFullName
}) {
  return (
    <div className="bg-theme-gray-3 overflow-hidden lg:px-6 md:!px-0">
      <div className="relative w-10/12 md:p-6 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col items-center bg-user-input">
        <div className="flex w-full h-full justify-between p-8 md:p-4 text-white bg-theme-gray-6">
            <div className="flex items-center justify-center mr-8 md:mr-4">
                <img src={userThumb} />
            </div>
            <div className="border-x border-white md:px-0 md:border-none px-8 border-opacity-50">
                <p className="text-base md:text-xs">Hallo,</p>
                <h3 className="text-22 font-bold py-1 md:text-14">{userFullName}</h3>
                <p className="text-14 md:text-10">Sie haben noch keine Anzeigen oder Favoriten,<br/>daher können wir Sie nicht über aktueller Entwicklungen informieren.</p>
                <button className="mt-4 px-4 py-2 font-bold rounded-md text-14 border ease-linear duration-200 hover:bg-theme-yellow-2 text-theme-black-2 border-theme-gray-2 bg-theme-gray-5">Updates erkunden</button>
            </div>
            <div className="flex items-center justify-center ml-4 md:hidden">
            <img src='/images/dashboard-right-img.png' />
            </div>
        </div>
      </div>
    </div>
  );
}
