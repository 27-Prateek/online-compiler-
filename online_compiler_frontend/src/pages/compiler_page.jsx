import React, { useState } from "react";
import { dracula } from "@uiw/codemirror-theme-dracula";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";

const CompilerPage = () => {
  const [language, setLanguage] = useState("c++");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");


  const codeSnippets = {
    python: `# Write your Python code here
print("Hello, World!")`,

    "c++": `// Write your C++ code here
#include <iostream>
using namespace std;
        
int main() {
    cout << "Hello, World!";
    return 0;
}`,

    c: `// Write your C code here
#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}`,

    java: `// Write your Java code here
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
  };

  const languageExtensions = {
    python: python(),
    "c++": cpp(),
    c: cpp(),
    java: java(),
  };

  const [code, setCode] = useState(codeSnippets["c++"]);

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    setCode(codeSnippets[selectedLanguage]);
  };

  return (
    <div className="h-screen w-full p-4 bg-gray-900 text-white overflow-auto">
      <div className="flex items-center justify-between mb-4 p-4 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-400">ReFor</h1>
      <button className="bg-green-500 text-white px-6 py-2 mx-4 rounded-lg font-bold shadow-md hover:bg-green-600">Run</button>

      <div className="flex items-center">
          <label htmlFor="language"></label>
          <select name="language" id="language" value={language} onChange={handleLanguageChange} 
          className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none border border-gray-600">
            <option value="python">Python</option>
            <option value="c++">C++</option>
            <option value="c">C</option>
            <option value="java">Java</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3  flex-1 border border-gray-700 rounded-md p-2 h-200px   ">
        {/* Code Editor Section */}
        <div className="flex-1 border border-gray-700 rounded-md p-2 h-141 col-span-2 flex flex-col">
          <CodeMirror
            className="flex-1 w-full min-w-[100px] max-w-full h-auto min-h-[200px] max-h-[600px] overflow-auto"
            value={code}
            height="546px"
            theme={dracula}
            extensions={[languageExtensions[language]]}
            onChange={(value) => setCode(value)}
          />
        </div>

        {/* Input & Output Sections */}
        <div className="grid grid-rows-8 gap-3 h-[80vh]">
            
          {/* display input */}
          <div className="p-2 h-full flex items-center row-span-1">
            <h1 className="text-lg font-bold">Input</h1>
          </div>


          {/* input box */}
          <div className="border border-gray-700 rounded-md p-2 h-full flex items-center justify-center row-span-3">
          <CodeMirror
              className="w-full h-full"
              value={input}
              height="185px"
              theme={dracula}
              onChange={(value) => setInput(value)}/>
          </div>


          {/* display output */}
          <div className="p-2 h-full flex items-center  row-span-1">
            <h1 className="text-lg font-bold">Output</h1>
          </div>


          <div className="border border-gray-700 rounded-md p-2 h-full flex items-center justify-center row-span-3">
          <CodeMirror
              className="w-full h-full"
              value={output}
              height="185px"
              theme={dracula}
              onChange={(value) => setOutput(value)}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompilerPage;
