import { useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'

type TAnimatinManager = {

}

export default function useAnimationManager(props: TAnimatinManager) {
  const pathname = usePathname();

  const refs = useRef<HTMLDivElement>({ data: { verifyPath: null, iscount: 0, oldPathname: "/" } }).current;

  const setRef = (elemento, nombre) => {
    refs[nombre] = elemento;
  };

  useEffect(() => {

    if (pathname === '/') {
      refs.data.verifyPath = pathname;
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

      if (refs?.data.verifyPath === '/') {

        if (refs?.data.count >= 1) {
          refs?.centerRef.classList.remove('center-about');
          void refs?.centerRef.offsetWidth;

          refs?.bookRef.classList.remove('book-animate');
          void refs?.bookRef.offsetWidth;
          refs?.bookRef.classList.add('book-animate');
        }

        if (pathname === "/" && refs?.data.count >= 1) {
          refs?.bookRef.classList.remove('book-animate2');
          refs?.bookRef.classList.remove('book-animate');
          void refs?.bookRef.offsetWidth;
          refs?.bookRef.classList.add('book-animate');
        }

        if (pathname === "/" && refs?.data.count >= 2) {
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

      if (refs?.data.verifyPath === '/about_me') {
        reloadingAboutPage(refs)
      }

      if (refs?.data.verifyPath === '/experiences') {
        reloadingExperiencesPage(refs)
      }

      if (refs?.data.verifyPath === '/projects') {
        reloadingProjectsPage(refs)
      }

      if (refs?.data.verifyPath === '/studies') {
        reloadingStudiesPage(refs)
      }

      if (refs?.data.verifyPath === '/skills') {
        reloadingSkillsPage(refs)
      }

      //////////////////////////////////////////////////////
      //////////////////////////////////////////////////////

      if (refs?.data.oldPathname === "/about_me") {
        retorneHomeToAbout(refs)
      }

      if (refs?.data.oldPathname === "/experiences") {
        retorneHomeToExperiences(refs)
      }

      if (refs?.data.oldPathname === "/projects") {
        retorneHomeToProjects(refs)
      }

      if (refs?.data.oldPathname === "/studies") {
        retorneHomeToStudies(refs)
      }

      if (refs?.data.oldPathname === "/skills") {
        retorneHomeToSkills(refs)
      }

    }

    if (pathname !== '/') {
      refs.data.verifyPath = pathname;
    }

    if (refs.data.count === 0) {
      refs.data.count = 1;
    }

    if (pathname !== "/") {
      refs.data.count = 2;
    }

    refs.data.oldPathname = pathname;
  }, [pathname])

  return setRef;

}

function removeClassCenter(refs) {
  if (refs?.centerRef) {
    refs?.centerRef.classList.remove('center-finish');
    refs?.centerRef.classList.remove('center-skills');
    refs?.centerRef.classList.remove('center-studies');
    refs?.centerRef.classList.remove('center-projects');
    refs?.centerRef.classList.remove('center-experiences');
    refs?.centerRef.classList.remove('center-about');
    refs?.centerRef.classList.remove('center');
  }
}

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

function toAbout(refs) {
  refs?.pageRef6.classList.remove('origin-move-right-page-r6');
  refs?.pageRef6.classList.remove('move-right-page-r6');
  void refs?.pageRef6.offsetWidth;
  refs?.pageRef6.classList.add('move-right-page-r6');

  refs?.pageRef7.classList.remove('origin-move-right-page-r7');
  refs?.pageRef7.classList.remove('move-right-page-r7');
  void refs?.pageRef7.offsetWidth;
  refs?.pageRef7.classList.add('move-right-page-r7');

  refs?.pageRef8.classList.remove('origin-move-right-page-r8');
  refs?.pageRef8.classList.remove('move-right-page-r8');
  void refs?.pageRef8.offsetWidth;
  refs?.pageRef8.classList.add('move-right-page-r8');

  refs?.pageRef9.classList.remove('origin-move-right-page-r9');
  refs?.pageRef9.classList.remove('move-right-page-r9');
  void refs?.pageRef9.offsetWidth;
  refs?.pageRef9.classList.add('move-right-page-r9');

  refs?.pageRef0.classList.remove('origin-move-right-page-r10');
  refs?.pageRef0.classList.remove('move-right-page-r10');
  void refs?.pageRef0.offsetWidth;
  refs?.pageRef0.classList.add('move-right-page-r10', "about-extends-page");

  refs?.markPageRef.classList.remove('mark-page-move');
  void refs?.markPageRef.offsetWidth;
  refs?.markPageRef.classList.add('mark-page-move');

  refs?.markPageRef2.classList.remove('mark-page-move2');
  void refs?.markPageRef2.offsetWidth;
  refs?.markPageRef2.classList.add('mark-page-move2');

  refs?.bookRef.classList.remove('book-animate');
  refs?.bookRef.classList.remove('book-animate');
  void refs?.bookRef.offsetWidth;
  refs?.bookRef.classList.add('book-animate2');

  removeClassCenter(refs);
  void refs?.centerRef.offsetWidth;
  refs?.centerRef.classList.add('center-about');
}

function toExperiences(refs) {
  refs?.pageRef6.classList.remove('origin-move-right-page-r6');
  refs?.pageRef6.classList.remove('move-right-page-r6');
  void refs?.pageRef6.offsetWidth;
  refs?.pageRef6.classList.add('move-right-page-r6', '-md:border-l-[1px]');

  refs?.pageRef7.classList.remove('origin-move-right-page-r7');
  refs?.pageRef7.classList.remove('move-right-page-r7');
  void refs?.pageRef7.offsetWidth;
  refs?.pageRef7.classList.add('move-right-page-r7', '-md:border-l-[1px]');

  removeClassCenter(refs);
  void refs?.centerRef.offsetWidth;
  refs?.centerRef.classList.add('center-experiences');
}

function toProjects(refs) {
  refs?.pageRef6.classList.remove('origin-move-right-page-r6');
  refs?.pageRef6.classList.remove('move-right-page-r6');
  void refs?.pageRef6.offsetWidth;
  refs?.pageRef6.classList.add('move-right-page-r6', '-md:border-l-[1px]');

  refs?.pageRef7.classList.remove('origin-move-right-page-r7');
  refs?.pageRef7.classList.remove('move-right-page-r7');
  void refs?.pageRef7.offsetWidth;
  refs?.pageRef7.classList.add('move-right-page-r7', '-md:border-l-[1px]');

  refs?.pageRef8.classList.remove('origin-move-right-page-r8');
  refs?.pageRef8.classList.remove('move-right-page-r8');
  void refs?.pageRef8.offsetWidth;
  refs?.pageRef8.classList.add('move-right-page-r8', '-md:border-l-[1px]');

  refs?.pageRef9.classList.remove('origin-move-right-page-r9');
  refs?.pageRef9.classList.remove('move-right-page-r9');
  void refs?.pageRef9.offsetWidth;
  refs?.pageRef9.classList.add('move-right-page-r9', '-md:border-l-[1px]');

  removeClassCenter(refs);
  void refs?.centerRef.offsetWidth;
  refs?.centerRef.classList.add('center-projects');
}

function toStudies(refs) {
  refs?.pageRef5.classList.remove('origin-move-left-page-l5');
  refs?.pageRef5.classList.remove('move-left-page-l5');
  void refs?.pageRef5.offsetWidth;
  refs?.pageRef5.classList.add('move-left-page-l5', '-md:border-l-[1px]');

  refs?.pageRef4.classList.remove('origin-move-left-page-l4');
  refs?.pageRef4.classList.remove('move-left-page-l4');
  void refs?.pageRef4.offsetWidth;
  refs?.pageRef4.classList.add('move-left-page-l4', '-md:border-l-[1px]');

  refs?.pageRef3.classList.remove('origin-move-left-page-l3');
  refs?.pageRef3.classList.remove('move-left-page-l3');
  void refs?.pageRef3.offsetWidth;
  refs?.pageRef3.classList.add('move-left-page-l3', '-md:border-l-[1px]');

  removeClassCenter(refs);
  void refs?.centerRef.offsetWidth;
  refs?.centerRef.classList.add('center-studies');
}

function toSkills(refs) {
  refs?.pageRef5.classList.remove('origin-move-left-page-l5');
  refs?.pageRef5.classList.remove('move-left-page-l5');
  void refs?.pageRef5.offsetWidth;
  refs?.pageRef5.classList.add('move-left-page-l5', '-md:border-l-[1px]');

  refs?.pageRef4.classList.remove('origin-move-left-page-l4');
  refs?.pageRef4.classList.remove('move-left-page-l4');
  void refs?.pageRef4.offsetWidth;
  refs?.pageRef4.classList.add('move-left-page-l4', '-md:border-l-[1px]');

  removeClassCenter(refs);
  void refs?.centerRef.offsetWidth;
  refs?.centerRef.classList.add('center-skills');
}

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

function retorneHomeToAbout(refs) {
  refs?.pageRef6.classList.remove('move-right-page-r6');
  refs?.pageRef6.classList.remove('origin-move-right-page-r6');
  void refs?.pageRef6.offsetWidth;
  refs?.pageRef6.classList.add('origin-move-right-page-r6');

  refs?.pageRef7.classList.remove('move-right-page-r7');
  refs?.pageRef7.classList.remove('origin-move-right-page-r7');
  void refs?.pageRef7.offsetWidth;
  refs?.pageRef7.classList.add('origin-move-right-page-r7');

  refs?.pageRef8.classList.remove('move-right-page-r8');
  refs?.pageRef8.classList.remove('origin-move-right-page-r8');
  void refs?.pageRef8.offsetWidth;
  refs?.pageRef8.classList.add('origin-move-right-page-r8');

  refs?.pageRef9.classList.remove('move-right-page-r9');
  refs?.pageRef9.classList.remove('origin-move-right-page-r9');
  void refs?.pageRef9.offsetWidth;
  refs?.pageRef9.classList.add('origin-move-right-page-r9');

  refs?.pageRef0.classList.remove('move-right-page-r10');
  refs?.pageRef0.classList.remove('origin-move-right-page-r10');
  void refs?.pageRef0.offsetWidth;
}

function retorneHomeToExperiences(refs) {
  refs?.pageRef6.classList.remove('move-right-page-r6');
  refs?.pageRef6.classList.remove('origin-move-right-page-r6');
  void refs?.pageRef6.offsetWidth;
  refs?.pageRef6.classList.add('origin-move-right-page-r6');

  refs?.pageRef7.classList.remove('move-right-page-r7');
  refs?.pageRef7.classList.remove('origin-move-right-page-r7');
  void refs?.pageRef7.offsetWidth;
  refs?.pageRef7.classList.add('origin-move-right-page-r7');
}

function retorneHomeToProjects(refs) {
  refs?.pageRef6.classList.remove('move-right-page-r6');
  refs?.pageRef6.classList.remove('origin-move-right-page-r6');
  void refs?.pageRef6.offsetWidth;
  refs?.pageRef6.classList.add('origin-move-right-page-r6');

  refs?.pageRef7.classList.remove('move-right-page-r7');
  refs?.pageRef7.classList.remove('origin-move-right-page-r7');
  void refs?.pageRef7.offsetWidth;
  refs?.pageRef7.classList.add('origin-move-right-page-r7');

  refs?.pageRef8.classList.remove('move-right-page-r8');
  refs?.pageRef8.classList.remove('origin-move-right-page-r8');
  void refs?.pageRef8.offsetWidth;
  refs?.pageRef8.classList.add('origin-move-right-page-r8');

  refs?.pageRef9.classList.remove('move-right-page-r9');
  refs?.pageRef9.classList.remove('origin-move-right-page-r9');
  void refs?.pageRef9.offsetWidth;
  refs?.pageRef9.classList.add('origin-move-right-page-r9');
}

function retorneHomeToStudies(refs) {
  refs?.pageRef5.classList.remove('move-left-page-l5');
  refs?.pageRef5.classList.remove('origin-move-left-page-l5');
  void refs?.pageRef5.offsetWidth;
  refs?.pageRef5.classList.add('origin-move-left-page-l5');

  refs?.pageRef4.classList.remove('move-left-page-l4');
  refs?.pageRef4.classList.remove('origin-move-left-page-l4');
  void refs?.pageRef4.offsetWidth;
  refs?.pageRef4.classList.add('origin-move-left-page-l4');

  refs?.pageRef3.classList.remove('move-left-page-l3');
  refs?.pageRef3.classList.remove('origin-move-left-page-l3');
  void refs?.pageRef3.offsetWidth;
  refs?.pageRef3.classList.add('origin-move-left-page-l3');
}

function retorneHomeToSkills(refs) {
  refs?.pageRef5.classList.remove('move-left-page-l5');
  refs?.pageRef5.classList.remove('origin-move-left-page-l5');
  void refs?.pageRef5.offsetWidth;
  refs?.pageRef5.classList.add('origin-move-left-page-l5', '-md:border-l-[1px]');

  refs?.pageRef4.classList.remove('move-left-page-l4');
  refs?.pageRef4.classList.remove('origin-move-left-page-l4');
  void refs?.pageRef4.offsetWidth;
  refs?.pageRef4.classList.add('origin-move-left-page-l4', '-md:border-l-[1px]');
}

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

function reloadingAboutPage(refs) {

}

function reloadingProjectsPage(refs) {

}

function reloadingExperiencesPage(refs) {

}

function reloadingStudiesPage(refs) {

}

function reloadingSkillsPage(refs) {

}