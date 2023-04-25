import RightMenuItem from '../../components/Right/RightMenuItem'
import { observer } from 'mobx-react-lite'
import dynamicPageRoutingSlice from '../../store/dynamicPageRoutingSlice'
import { useCallback } from 'react'


// export default function OhotaMenu() {
//   return (
//     <div className="ohota__menu" style={{ paddingTop: "3em" }}>
//       <div className="ohotamenu__container">
//         <div className="Information__for__hunters" style={{ width: "100%", backgroundColor: "rgb(96 165 250)", textAlign: "center", fontSize: "20px" }}>
//           <h1 style={{ color: "white", fontWeight: "500" }}>Информация охотникам</h1>
//         </div>
//         <div className="Information__for__hunters" style={{ width: "100%", backgroundColor: "rgb(96 165 250)", textAlign: "center", fontSize: "20px" }}>
//           <h1 style={{ color: "white", fontWeight: "500" }}>Проведение охоты</h1>
//         </div>
//         <div>
//           <ul style={{ listStyleType: "square", listStylePosition: "outside", color: "navy" }}>
//             <li style={{ fontSize: "15px" }}>
//               <a href="">Заявка на установление квот добычи охотничьих ресурсов в сезоне охоты 2021-2022 годов</a>
//             </li>
//             <li style={{ fontSize: "15px" }}>
//               <a href="">Заявка на выдачу бланков разрешений на добычу охотничьих ресурсов в сезоне охоты</a>
//             </li>
//             </ul>
//         </div>
//       </div>
//     </div>
//   );
// }


export const AboutPageLayout = observer(({ children }) => {
  const getRoutes = useCallback(() => {
    dynamicPageRoutingSlice.getAboutPageRoutes()
  }, [])

  return (
    <>
      <div className="container mx-auto text-red font-light min-h-[500px] py-10">
        <div className="flex xs:flex-col md:flex-col gap-2">
          <div>
            <h1 className="font-semibold text-lg text-white tracking-wider bg-[url('/bg_img.png')] mt-3">Информация охотникам</h1>
          </div>
          <div>

          <ul>

            <li className='hover:text-blue-700'>
              <RightMenuItem url='/activity/Сроки%20и%20правила%20охоты%20в%20охотничьих%20угодьях%20Республики%20Тыва' title='Сроки и правила охоты в охотничьих угодьях Республики Тыва' />
            </li>
            <li className='hover:text-blue-700'>
              <RightMenuItem url='/about/Изменения%20в%20Правилах%20охоты' title='Изменения в Правилах охоты' />
            </li>
            <li className='hover:text-blue-700'>
              <RightMenuItem url='/about/График%20приема%20граждан%20государственными%20инспекторами' title='График приема государственными инспекторами' />
            </li>
            <li className='hover:text-blue-700'>
              <RightMenuItem url='/activity/Охотничный%20билет' title='Охотничный билет' />
            </li>
            <li className='hover:text-blue-700'>
              <RightMenuItem url='/activity/Порядок%20ношения%20оружия' title='Порядок ношения оружия' />
            </li>

        
            <li className='hover:text-blue-700'>

              <RightMenuItem url='/activity/Памятки%20охотникам' title='Памятки охотникам' />
            </li>
            



          </ul>
          </div>

          <div >
            <h1 className="font-semibold text-lg dark:bg-gray-700 text-white tracking-wider bg-[url('/bg_img.png')]">Проведение охоты</h1>
          </div>

          <ul type='square'>
            <li className='hover:text-blue-700'>
              <RightMenuItem url='/activity/Проведение%20охоты' title='Заявка на установление квот добычи охотничьих ресурсов в сезоне охоты 2021-2022годов' />
            </li>
            <li className='hover:text-blue-700'>
              <RightMenuItem url='/activity/Проведение%20охоты' title='Заявка на выдачу бланков разрешений на добычу охотничьих ресурсов в сезоне охоты' />
            </li>
            <li className='hover:text-blue-700'>
              <RightMenuItem url='/activity/Получение%20разрешений%20на%20добычу%20охотничьих%20ресурсов' title='Получение разрешений на добычу охотничьих ресурсов' />
            </li>

          </ul>



          <div className="xs:w-full md:w-9/12 [&>ul]:list-disc [&>p]:text-justify sm:py-3 xs:py-3 md:py-0 lg:py-0">
            {children}
          </div>
        </div>
      </div>
    </>
  )
})