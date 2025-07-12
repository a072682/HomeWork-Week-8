import { Accordion } from 'react-bootstrap';
import './_ReactBsAccordion.scss';
import { Fragment, useEffect, useState } from 'react';

function ReactBsAccordion({ expandAll,classPageAllData}) {

  // 🔧 新增：用來控制哪些項目是展開的
  const [activeKeys, setActiveKeys] = useState([]);

  // 🔧 當 props 變動時，自動展開或收合全部
  useEffect(() => {
    if (expandAll) {
      // 展開所有項目：將所有項目的 eventKey 存入 activeKeys
      setActiveKeys(classPageAllData[0]?.classData?.classAccordion?.map((_, index) => index.toString()));
      //轉換後的結果會像這樣：
      //['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','10', '11', '12', '13', '14', '15', '16', '17']
      //因為：每個 <Accordion.Item eventKey="0" /> 都是用字串型的 key（不是數字！）
    } else {
      // 關閉所有項目：清空 activeKeys 陣列
      setActiveKeys([]);
    }
  }, [expandAll,classPageAllData]);

  return (
    <div>
      {/* 客製化樣式的 React-Bootstrap Accordion */}
      <Accordion activeKey={activeKeys} onSelect={(key) => {
          //activeKey={activeKeys}的意思是哪些項目的 eventKey（編號）應該是展開的 例如:activeKeys = ['0', '2', '5']代表 Accordion 的第 1、3、6 項展開
          //onSelect={(key) => { ... }}當使用者點擊任意項目的標題時key 會是你點擊的項目編號（例如 '2'）
          //假設 activeKeys = ['0', '2'] 則點擊 eventKey="2"：2已展開 → 移除 → activeKeys = ['0']
          // 🔁 支援單一展開或收起
          setActiveKeys((prev) => prev.includes(key)? prev.filter((k) => k !== key): [...prev, key]); }} className="custom-ReactAccordion">
          {/* .includes 用來判斷一個陣列中是否包含某個值。 true：陣列中有這個值 false：陣列中沒有這個值 */}
        {
            classPageAllData[0]?.classData?.classAccordion?.map((item, index) => (
                <Accordion.Item key={item.id} eventKey={index.toString()} className="custom-ReactAccordionItem">
                  <Accordion.Header className="custom-ReactAccordionHeader">
                    <div className="title">
                      <div className="numbox">{item.id}</div>
                      <p>{item.title}</p>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="custom-ReactAccordionBody">
                    <div className="body">
                      {
                        item.bodycontent?.map((bodyitem,bodyindex)=>{
                            return(
                              <Fragment key={bodyindex}>
                                <div className='body-box'>
                                  <div className="content01">
                                    <span className="material-symbols-outlined">{bodyitem.icon}</span>
                                    <p>{bodyitem.content}</p>
                                  </div>
                                  <div className="content02">
                                    {
                                      bodyitem.trylook?(<button>試看單元</button>):(null)
                                    }
                                    <p>{bodyitem.duration}</p>
                                  </div>
                                </div>
                              </Fragment>
                            )
                            
                        })
                      }
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
            ))
        }
      </Accordion>
    </div>
  )
}

export default ReactBsAccordion;
