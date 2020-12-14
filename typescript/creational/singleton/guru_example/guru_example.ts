class Singleton {
  private static instance: Singleton
<<<<<<< HEAD
=======

>>>>>>> ff0f8f96f42e3edb68aff6ab15e64aeab4313474
  private constructor(){}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }
}

function client() {
  const s1 = Singleton.getInstance()
  const s2 = Singleton.getInstance()

<<<<<<< HEAD
  console.log(s1 === s2)
}

client()
=======
  console.log(`s1 === s2, ${s1 === s2}`)
}

client()
>>>>>>> ff0f8f96f42e3edb68aff6ab15e64aeab4313474
