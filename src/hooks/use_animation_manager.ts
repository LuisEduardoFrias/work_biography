import { useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'

type TRefs = Record<string, HTMLDivElement | null>

type AnimationData = {
  verifyPath: string | null;
  count: number;
  oldPathname: string;
}


export default function useAnimationManager() {
  const pathname = usePathname();

  const refs = useRef<TRefs>({}).current;

  const data = useRef<AnimationData>({ verifyPath: null, count: 0, oldPathname: "/", }).current;

  const setRef = (elemento: HTMLDivElement | null, nombre: string) => {
    refs[nombre] = elemento;
  };

  useEffect(() => {

    if (pathname === '/') {
      data.verifyPath = pathname;
    }

    if (refs?.pageRef1 &&
      refs?.pageRef2 &&
      refs?.pageRef3 &&
      refs?.pageRef4 &&
      refs?.pageRef5 &&
      refs?.pageRef6 &&
      refs?.pageRef7 &&
      refs?.pageRef8 &&
      refs?.pageRef9 &&
      refs?.pageRef0 &&
      refs?.markPageRef &&
      refs?.markPageRef2 &&
      refs?.bookRef &&
      refs?.centerRef) {

      if (data.verifyPath === '/') {

        if (data.count >= 1) {
          refs?.centerRef.classList.remove('center-about');
          void refs?.centerRef.offsetWidth;

          refs?.bookRef.classList.remove('book-animate');
          void refs?.bookRef.offsetWidth;
          refs?.bookRef.classList.add('book-animate');
        }

        if (pathname === "/" && data.count >= 1) {
          refs?.bookRef.classList.remove('book-animate2');
          refs?.bookRef.classList.remove('book-animate');
          void refs?.bookRef.offsetWidth;
          refs?.bookRef.classList.add('book-animate');
        }

        if (pathname === "/" && data.count >= 2) {
          removeClassCenter(refs);
          void refs?.centerRef.offsetWidth;
          refs?.centerRef.classList.add('center-finish');
        }

        if (pathname !== "/about_me") {
          refs?.pageRef1.classList.add('remove-left-border');
          refs?.pageRef2.classList.add('remove-left-border');
          refs?.pageRef3.classList.add('remove-left-border');
          refs?.pageRef4.classList.add('remove-left-border');
          refs?.pageRef5.classList.add('remove-left-border');
          refs?.pageRef6.classList.add('remove-left-border');
          refs?.pageRef7.classList.add('remove-left-border');
          refs?.pageRef8.classList.add('remove-left-border');
          refs?.pageRef9.classList.add('remove-left-border');
          refs?.pageRef0.classList.add('remove-left-border');
          refs?.pageRef0.classList.remove('about-extends-page');
        } else {
          refs?.pageRef1.classList.remove('remove-left-border');
          refs?.pageRef2.classList.remove('remove-left-border');
          refs?.pageRef3.classList.remove('remove-left-border');
          refs?.pageRef4.classList.remove('remove-left-border');
          refs?.pageRef5.classList.remove('remove-left-border');
          refs?.pageRef6.classList.remove('remove-left-border');
          refs?.pageRef7.classList.remove('remove-left-border');
          refs?.pageRef8.classList.remove('remove-left-border');
          refs?.pageRef9.classList.remove('remove-left-border');
          refs?.pageRef0.classList.remove('remove-left-border');
        }

        //about
        if (pathname === "/about_me") {
          toAbout(refs)
        }

        //experiences
        if (pathname === "/experiences") {
          toExperiences(refs)
        }

        //projects
        if (pathname === "/projects") {
          toProjects(refs)
        }

        //studies
        if (pathname === "/studies") {
          toStudies(refs)
        }

        //skills
        if (pathname === "/skills") {
          toSkills(refs)
        }

      }

      //////////////////////////////////////////////////////
      //////////////////////////////////////////////////////

      if (data.verifyPath === '/about_me') {
        reloadingAboutPage(refs)
      }

      if (data.verifyPath === '/experiences') {
        reloadingExperiencesPage(refs)
      }

      if (data.verifyPath === '/projects') {
        reloadingProjectsPage(refs)
      }

      if (data.verifyPath === '/studies') {
        reloadingStudiesPage(refs)
      }

      if (data.verifyPath === '/skills') {
        reloadingSkillsPage(refs)
      }

      //////////////////////////////////////////////////////
      //////////////////////////////////////////////////////

      if (data.oldPathname === "/about_me") {
        retorneHomeToAbout(refs)
      }

      if (data.oldPathname === "/experiences") {
        retorneHomeToExperiences(refs)
      }

      if (data.oldPathname === "/projects") {
        retorneHomeToProjects(refs)
      }

      if (data.oldPathname === "/studies") {
        retorneHomeToStudies(refs)
      }

      if (data.oldPathname === "/skills") {
        retorneHomeToSkills(refs)
      }

    }

    if (pathname !== '/') {
      data.verifyPath = pathname;
    }

    if (data.count === 0) {
      data.count = 1;
    }

    if (pathname !== "/") {
      data.count = 2;
    }

    data.oldPathname = pathname;
  }, [pathname, data, refs])

  return setRef;

}

function removeClassCenter(refs: TRefs) {
  if (refs?.centerRef) {
    refs.centerRef?.classList.remove('center-finish');
    refs.centerRef?.classList.remove('center-skills');
    refs.centerRef?.classList.remove('center-studies');
    refs.centerRef?.classList.remove('center-projects');
    refs.centerRef?.classList.remove('center-experiences');
    refs.centerRef?.classList.remove('center-about');
    refs.centerRef?.classList.remove('center');
  }
}

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

function toAbout(refs: TRefs) {
  refs.pageRef6?.classList.remove('origin-move-right-page-r6');
  refs.pageRef6?.classList.remove('move-right-page-r6');
  void refs.pageRef6?.offsetWidth;
  refs.pageRef6?.classList.add('move-right-page-r6');

  refs.pageRef7?.classList.remove('origin-move-right-page-r7');
  refs.pageRef7?.classList.remove('move-right-page-r7');
  void refs.pageRef7?.offsetWidth;
  refs.pageRef7?.classList.add('move-right-page-r7');

  refs.pageRef8?.classList.remove('origin-move-right-page-r8');
  refs.pageRef8?.classList.remove('move-right-page-r8');
  void refs.pageRef8?.offsetWidth;
  refs.pageRef8?.classList.add('move-right-page-r8');

  refs.pageRef9?.classList.remove('origin-move-right-page-r9');
  refs.pageRef9?.classList.remove('move-right-page-r9');
  void refs.pageRef9?.offsetWidth;
  refs.pageRef9?.classList.add('move-right-page-r9');

  refs.pageRef0?.classList.remove('origin-move-right-page-r10');
  refs.pageRef0?.classList.remove('move-right-page-r10');
  void refs.pageRef0?.offsetWidth;
  refs.pageRef0?.classList.add('move-right-page-r10', "about-extends-page");

  refs.markPageRef?.classList.remove('mark-page-move');
  void refs.markPageRef?.offsetWidth;
  refs.markPageRef?.classList.add('mark-page-move');

  refs.markPageRef2?.classList.remove('mark-page-move2');
  void refs.markPageRef2?.offsetWidth;
  refs.markPageRef2?.classList.add('mark-page-move2');

  refs.bookRef?.classList.remove('book-animate');
  refs.bookRef?.classList.remove('book-animate');
  void refs.bookRef?.offsetWidth;
  refs.bookRef?.classList.add('book-animate2');

  removeClassCenter(refs);
  void refs.centerRef?.offsetWidth;
  refs.centerRef?.classList.add('center-about');
}

function toExperiences(refs: TRefs) {
  refs.pageRef6?.classList.remove('origin-move-right-page-r6');
  refs.pageRef6?.classList.remove('move-right-page-r6');
  void refs.pageRef6?.offsetWidth;
  refs.pageRef6?.classList.add('move-right-page-r6', '-md:border-l-[1px]');

  refs.pageRef7?.classList.remove('origin-move-right-page-r7');
  refs.pageRef7?.classList.remove('move-right-page-r7');
  void refs.pageRef7?.offsetWidth;
  refs.pageRef7?.classList.add('move-right-page-r7', '-md:border-l-[1px]');

  removeClassCenter(refs);
  void refs.centerRef?.offsetWidth;
  refs.centerRef?.classList.add('center-experiences');
}

function toProjects(refs: TRefs) {
  refs.pageRef6?.classList.remove('origin-move-right-page-r6');
  refs.pageRef6?.classList.remove('move-right-page-r6');
  void refs.pageRef6?.offsetWidth;
  refs.pageRef6?.classList.add('move-right-page-r6', '-md:border-l-[1px]');

  refs.pageRef7?.classList.remove('origin-move-right-page-r7');
  refs.pageRef7?.classList.remove('move-right-page-r7');
  void refs.pageRef7?.offsetWidth;
  refs.pageRef7?.classList.add('move-right-page-r7', '-md:border-l-[1px]');

  refs.pageRef8?.classList.remove('origin-move-right-page-r8');
  refs.pageRef8?.classList.remove('move-right-page-r8');
  void refs.pageRef8?.offsetWidth;
  refs.pageRef8?.classList.add('move-right-page-r8', '-md:border-l-[1px]');

  refs.pageRef9?.classList.remove('origin-move-right-page-r9');
  refs.pageRef9?.classList.remove('move-right-page-r9');
  void refs.pageRef9?.offsetWidth;
  refs.pageRef9?.classList.add('move-right-page-r9', '-md:border-l-[1px]');

  removeClassCenter(refs);
  void refs?.centerRef?.offsetWidth;
  refs.centerRef?.classList.add('center-projects');
}

function toStudies(refs: TRefs) {
  refs.pageRef5?.classList.remove('origin-move-left-page-l5');
  refs.pageRef5?.classList.remove('move-left-page-l5');
  void refs.pageRef5?.offsetWidth;
  refs.pageRef5?.classList.add('move-left-page-l5', '-md:border-l-[1px]');

  refs.pageRef4?.classList.remove('origin-move-left-page-l4');
  refs.pageRef4?.classList.remove('move-left-page-l4');
  void refs.pageRef4?.offsetWidth;
  refs.pageRef4?.classList.add('move-left-page-l4', '-md:border-l-[1px]');

  refs.pageRef3?.classList.remove('origin-move-left-page-l3');
  refs.pageRef3?.classList.remove('move-left-page-l3');
  void refs.pageRef3?.offsetWidth;
  refs.pageRef3?.classList.add('move-left-page-l3', '-md:border-l-[1px]');

  removeClassCenter(refs);
  void refs.centerRef?.offsetWidth;
  refs.centerRef?.classList.add('center-studies');
}

function toSkills(refs: TRefs) {
  refs.pageRef5?.classList.remove('origin-move-left-page-l5');
  refs.pageRef5?.classList.remove('move-left-page-l5');
  void refs.pageRef5?.offsetWidth;
  refs.pageRef5?.classList.add('move-left-page-l5', '-md:border-l-[1px]');

  refs.pageRef4?.classList.remove('origin-move-left-page-l4');
  refs.pageRef4?.classList.remove('move-left-page-l4');
  void refs.pageRef4?.offsetWidth;
  refs.pageRef4?.classList.add('move-left-page-l4', '-md:border-l-[1px]');

  removeClassCenter(refs);
  void refs.centerRef?.offsetWidth;
  refs.centerRef?.classList.add('center-skills');
}

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

function retorneHomeToAbout(refs: TRefs) {
  refs.pageRef6?.classList.remove('move-right-page-r6');
  refs.pageRef6?.classList.remove('origin-move-right-page-r6');
  void refs.pageRef6?.offsetWidth;
  refs.pageRef6?.classList.add('origin-move-right-page-r6');

  refs.pageRef7?.classList.remove('move-right-page-r7');
  refs.pageRef7?.classList.remove('origin-move-right-page-r7');
  void refs.pageRef7?.offsetWidth;
  refs.pageRef7?.classList.add('origin-move-right-page-r7');

  refs.pageRef8?.classList.remove('move-right-page-r8');
  refs.pageRef8?.classList.remove('origin-move-right-page-r8');
  void refs.pageRef8?.offsetWidth;
  refs.pageRef8?.classList.add('origin-move-right-page-r8');

  refs.pageRef9?.classList.remove('move-right-page-r9');
  refs.pageRef9?.classList.remove('origin-move-right-page-r9');
  void refs.pageRef9?.offsetWidth;
  refs.pageRef9?.classList.add('origin-move-right-page-r9');

  refs.pageRef0?.classList.remove('move-right-page-r10');
  refs.pageRef0?.classList.remove('origin-move-right-page-r10');
  void refs.pageRef0?.offsetWidth;
}

function retorneHomeToExperiences(refs: TRefs) {
  refs.pageRef6?.classList.remove('move-right-page-r6');
  refs.pageRef6?.classList.remove('origin-move-right-page-r6');
  void refs.pageRef6?.offsetWidth;
  refs.pageRef6?.classList.add('origin-move-right-page-r6');

  refs.pageRef7?.classList.remove('move-right-page-r7');
  refs.pageRef7?.classList.remove('origin-move-right-page-r7');
  void refs.pageRef7?.offsetWidth;
  refs.pageRef7?.classList.add('origin-move-right-page-r7');
}

function retorneHomeToProjects(refs: TRefs) {
  refs.pageRef6?.classList.remove('move-right-page-r6');
  refs.pageRef6?.classList.remove('origin-move-right-page-r6');
  void refs.pageRef6?.offsetWidth;
  refs.pageRef6?.classList.add('origin-move-right-page-r6');

  refs.pageRef7?.classList.remove('move-right-page-r7');
  refs.pageRef7?.classList.remove('origin-move-right-page-r7');
  void refs.pageRef7?.offsetWidth;
  refs.pageRef7?.classList.add('origin-move-right-page-r7');

  refs.pageRef8?.classList.remove('move-right-page-r8');
  refs.pageRef8?.classList.remove('origin-move-right-page-r8');
  void refs.pageRef8?.offsetWidth;
  refs.pageRef8?.classList.add('origin-move-right-page-r8');

  refs.pageRef9?.classList.remove('move-right-page-r9');
  refs.pageRef9?.classList.remove('origin-move-right-page-r9');
  void refs.pageRef9?.offsetWidth;
  refs.pageRef9?.classList.add('origin-move-right-page-r9');
}

function retorneHomeToStudies(refs: TRefs) {
  refs.pageRef5?.classList.remove('move-left-page-l5');
  refs.pageRef5?.classList.remove('origin-move-left-page-l5');
  void refs.pageRef5?.offsetWidth;
  refs.pageRef5?.classList.add('origin-move-left-page-l5');

  refs.pageRef4?.classList.remove('move-left-page-l4');
  refs.pageRef4?.classList.remove('origin-move-left-page-l4');
  void refs.pageRef4?.offsetWidth;
  refs.pageRef4?.classList.add('origin-move-left-page-l4');

  refs.pageRef3?.classList.remove('move-left-page-l3');
  refs.pageRef3?.classList.remove('origin-move-left-page-l3');
  void refs.pageRef3?.offsetWidth;
  refs.pageRef3?.classList.add('origin-move-left-page-l3');
}

function retorneHomeToSkills(refs: TRefs) {
  refs.pageRef5?.classList.remove('move-left-page-l5');
  refs.pageRef5?.classList.remove('origin-move-left-page-l5');
  void refs.pageRef5?.offsetWidth;
  refs.pageRef5?.classList.add('origin-move-left-page-l5', '-md:border-l-[1px]');

  refs.pageRef4?.classList.remove('move-left-page-l4');
  refs.pageRef4?.classList.remove('origin-move-left-page-l4');
  void refs.pageRef4?.offsetWidth;
  refs.pageRef4?.classList.add('origin-move-left-page-l4', '-md:border-l-[1px]');
}

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

function reloadingAboutPage(refs: TRefs) {
  if (false)
    console.log(refs)
}

function reloadingProjectsPage(refs: TRefs) {
  if (false)
    console.log(refs)
}

function reloadingExperiencesPage(refs: TRefs) {
  if (false)
    console.log(refs)
}

function reloadingStudiesPage(refs: TRefs) {
  if (false)
    console.log(refs)
}

function reloadingSkillsPage(refs: TRefs) {
  if (false)
    console.log(refs)
}