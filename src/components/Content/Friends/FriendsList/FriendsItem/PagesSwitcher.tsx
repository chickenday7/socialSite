import React from "react";


type PagesSwitcherPropsType = {
    arrayCount: Array<number>
    currentPage: number
    pagesCount: number
    onCurrentPage: (newCurrentPage: number) => void

}
export const PagesSwitcher = (props: PagesSwitcherPropsType) => {


    return (
        <>

            {
                props.arrayCount
                    .filter((elem: number) => {
                        if (elem + 2 >= props.currentPage && elem - 2 <= props.currentPage) {
                            return true
                        } else return elem === 1 || elem === props.pagesCount;
                    }).map((elem: number, index: number) => {
                    if (props.currentPage >= 4) {
                        if (elem === props.currentPage - 2 || elem === props.currentPage + 2) {
                            if (elem !== props.pagesCount) {
                                elem = 0
                            }
                        }
                    }
                    return (
                        <div key={index}>
                            {elem === 0
                                ? <span>....</span>
                                :
                                <span key={index} className={props.currentPage === elem ? "activePage" : 'disabledPage'}
                                      onClick={() => {
                                          props.onCurrentPage(elem)
                                      }}>{elem}</span>
                            }
                        </div>
                    )
                })}
        </>
    )
}