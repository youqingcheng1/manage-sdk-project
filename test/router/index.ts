// https://cn.vitejs.dev/guide/features.html#glob-import
const modules = import.meta.glob('./*.ts');
let result:any = [];
for (const path in modules) {
    const res = await modules[path]().then((mod) => {
      return (mod as any).default
    })
    result.push(...res)
}

export default result
