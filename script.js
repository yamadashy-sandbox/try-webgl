!function () {
  function e() {
    function e() {
      T && (p = .001 * (Date.now() - C), i.useProgram(o), i.bindFramebuffer(E, c.f), i.bindTexture(R, d.t), i.enableVertexAttribArray(x), i.vertexAttribPointer(x, 3, 5126, !1, 0, 0), i.viewport(0, 0, k, k), i.clear(16384), i.uniform2fv(f.m, m), i.uniform1f(f.t, p), i.uniform2fv(f.r, [k, k]), i.uniform1i(f.s, 0), i.drawArrays(5, 0, 4), i.useProgram(b), i.bindFramebuffer(E, null), i.bindTexture(R, c.t), i.enableVertexAttribArray(P), i.vertexAttribPointer(P, 3, 5126, !1, 0, 0), i.viewport(0, 0, I, U), i.clear(16384), i.uniform1i(v.t, 0), i.drawArrays(5, 0, 4), i.flush(), g = c, c = d, d = g, requestAnimationFrame(e))
    }

    i.bindBuffer(_, i.createBuffer()), i.bufferData(_, new Float32Array([-1, 1, 0, -1, -1, 0, 1, 1, 0, 1, -1, 0]), 35044), i.useProgram(o), f = {}, f.m = i.getUniformLocation(o, "m"), f.t = i.getUniformLocation(o, "t"), f.r = i.getUniformLocation(o, "r"), f.s = i.getUniformLocation(o, "smp"), x = i.getAttribLocation(o, "p"), i.useProgram(b), v = {}, v.t = i.getUniformLocation(b, "t"), P = i.getAttribLocation(b, "p"), c = r(), d = r(), i.activeTexture(33984), i.clearColor(0, 0, 0, 1), C = Date.now(), e()
  }

  function r() {
    return w = i.createFramebuffer(), i.bindFramebuffer(E, w), A = i.createRenderbuffer(), i.bindRenderbuffer(B, A), i.renderbufferStorage(B, 33189, k, k), i.framebufferRenderbuffer(E, 36096, B, A), y = i.createTexture(), i.bindTexture(R, y), i.texImage2D(R, 0, 6408, k, k, 0, 6408, 5121, null), i.texParameteri(R, 10240, 9728), i.texParameteri(R, 10241, 9728), i.texParameteri(R, 10242, 10497), i.texParameteri(R, 10243, 10497), i.framebufferTexture2D(E, 36064, R, y, 0), {
      f: w,
      t: y
    }
  }

  function t(e) {
    m = [(e.clientX - a.offsetLeft) / I * 2 - 1, 1 - (e.clientY - a.offsetTop) / U * 2]
  }

  function n(e) {
    return document.getElementById(e)
  }

  var a, i, o, f, u, m, c, d, g, b, v, l, s, x, P, h, p, L, w, A, y, S, T, D, t, C, I, U, k, E, B, R, _;
  E = 36160, B = 36161, R = 3553, _ = 34962, u = window, h = alert, u.addEventListener("load", function () {
    function r(e, r, t) {
      return S = i.createShader(35633 - r), i.shaderSource(S, t), i.compileShader(S), i.getShaderParameter(S, 35713) ? (i.attachShader(e, S), i.getShaderInfoLog(S)) : void h(i.getShaderInfoLog(S))
    }

    if (u.addEventListener("keydown", function (e) {
      T = 27 !== e.keyCode
    }, !1), T = !0, a = n("canvas-viewport"), i = a.getContext("webgl"), F = i.bindTexture, a.width = I = u.innerWidth, a.height = U = u.innerHeight, function () {
      for (k = D = 1; k < Math.max(I, U);) k = Math.pow(2, ++D)
    }(), a.addEventListener("mousemove", t, !0), m = [0, 0], o = i.createProgram(), l = "attribute vec3 p;void main(){gl_Position=vec4(p,1.);}", s = n("f").textContent, !r(o, 0, l) && !r(o, 1, s)) {
      if (i.linkProgram(o), L = i.getProgramParameter(o, 35714), !L) return void h(i.getProgramInfoLog(o));
      b = i.createProgram(), l = "attribute vec3 p;varying vec2 v;void main(){v=(p+1.).xy/2.;gl_Position=vec4(p,1.);}", s = "precision mediump float;uniform sampler2D t;varying vec2 v;void main(){gl_FragColor=texture2D(t,v);}", r(b, 0, l), r(b, 1, s), i.linkProgram(b), e()
    }
  }, !1)
}();
